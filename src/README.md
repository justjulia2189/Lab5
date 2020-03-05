# CS 385 Lab 5

## Overview

Your task is to fetch data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and render in inside of a `<table>`. You will fetch posts and users (two separate resources), and join their output into one table. Your table should look like the following:

| Title        | Body           | Author                            |
| ------------ | -------------- | --------------------------------- |
| Sample Title | Body text here | Leanne Graham (sincere@april.biz) |

In other words, each row is one record from the posts resource, and then instead of rendering the user's userId, you should look up the userId in the users resource and print the user's name and email.

## Instructions

This is a short lab based on today's lecture about the `fetch` API. JSONPlaceholder has an [example of fetch](https://jsonplaceholder.typicode.com/#example) that can help you. The table is already set up for you in App.js. You'll need to fetch the data inside of a `React.useEffect` and store the users and posts each in their own `React.useState`. Then render the posts data (joined with the userId) in the table. While your app is waiting for the posts and users data, it should render "Loading..." instead of the `<table>`.
