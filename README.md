# Big Apple Runngers

# Repository URL:
- https://github.com/marskimiko/big-apple-runners-app

# Video Walkthrough:

# Blogpost inspired by building Big Apple Runners

# Project Philosophy: 

Big Apple Runngers is an application built for runners to find routes in NYC and write reviews on them to share with eachother. As a runner in NYC finding it hard to find good places to run in such an urban environment I was inspired to create a space for runners to share the findings and experiences with eahother.

# Features:

- Upon loading the website it takes you to the home page with instructions to login or signup in order to have access to the rest of the application
- Once you do so the hope page will load to say "Welcome, (yourname)! click routes in the nav or below to see all routes" 
- Once you click on routes you will be able to see all of the routes that have been added so far
- Each route has a "more info" button, which upon clicking takes you to a details page for the specific routes with more info about the route as well as reviews on the route written by users
- A review will only have the ability to be edited or deleted if it has be written by the user who is currently signed in. You also have the ability to write additional reviews at the bottom of the pge
- In the navigation there is also a "New Route" button that allows anyone to add more routes
- There is also a "My Routes" button in the navigation that upon clicking will take you to a page that shows only routes the user has reviewed

## Description of app: 

This is a single page full-stack CRUD application that has a back-end that was creating using Ruby and Runy on Rails and a front-end that was created using React and Javascript

On the front end the application uses a total of 15 components: App.js, Home.js, Navigation.js, Login.js, Signup.js, RouteContainer.js, RouteCard.js, RouteDetails.js, NewRoute.js, ReviewContainer.js, ReviewCard.js, NewReview.js, EditReview.js, MyRouteContainer.js, MyRouteCard.js

Client-side routes using React-Router: Home, Routes, New Route, My Routes, Signup, Login, Logout

Styling was done using CSS and Bootstrap

## Technologies used:

- React
- Javascript
- HTML
- CSS
- Bootstrap
- Ruby
- Ruby on Rails
- Active Record

## Installation

1. Fork and clone both the repositorie
2. Back-end
  - cd into the project directory
  - run 'bundle install'
  - run 'rake db:migrate'
  - run 'shotgun' to start the server
3. Front-end
  - cd into the client folder
  - run 'npm install'
  - run 'npm start' and the application will open into browser

## How to Use:

**•** Click "Listings in the navigation to see all of the listings" 

![Alt Text](phase-3-project-gifs/quicky-1.gif)

**•** Use the dropdown menu to filter the listings by category

![Alt Text](phase-3-project-gifs/quicky-2.gif)

**•** Fill out the form and click "add" to create a new category

![Alt Text](phase-3-project-gifs/quicky-3.gif)

**•** Click the "edit" button to edit a listing

![Alt Text](phase-3-project-gifs/quicky-4.gif)

**•** Click the "save" button to save you edit

![Alt Text](phase-3-project-gifs/quicky-5.gif)

**•** If you want to delete a listing from the browser click the 🗑 button

![Alt Text](phase-3-project-gifs/quicky-6.gif)

**•** Click "New Listing" in the navigation to create a new listing

![Alt Text](phase-3-project-gifs/quicky-7.gif)

**•** Once you fill out the form click the "create listing" button which will take you back to the "Listings" page where you can see your new listing

![Alt Text](phase-3-project-gifs/quicky-8.gif)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```