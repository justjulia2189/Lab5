import React from "react";
import "./styles.css";

export default function App() {
  //one useEffect in here and two useStates
  const [posts, setPosts] = React.useState(null);
  const [users, setUsers] = React.useState(null);

  React.useEffect(function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(posts => posts.json())
      .then(posts => setPosts(posts));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(users => users.json())
      .then(users => setUsers(users));
  }, []);
  function lookUpUserByID(userId) {
    const author = users.find(users => {
      return users.id === userId;
    });
    const name = author.name;
    const email = author.email;
    return name.concat(", ", email);
  }

  if (!posts || !users) {
    return <p>"loading"</p>;
  }

  return (
    <div className="App">
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr>
              <td>{post.title}</td>
              <td>{post.body} </td>
              <td>{lookUpUserByID(post.userId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
