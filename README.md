[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
# Connected Sites
- Back-End Repo: https://github.com/cagusabi/cagusabi-api
- Application: https://cagusabi.github.io/cagusabi-client/
- Heroku Site: https://agile-wave-91156.herokuapp.com

# Technologies Used
- Ajax
- Atom
  - open-source text and source code editor
- Bootstrap
- CSS
- Curl
- HTML
- Javascript
- JQuery
- JSon
- SCSS

### About the Front-End
  The front-end of this website is a single page application(SPA) that presents the user with a welcome page, before
  sign-up and log-in, and upon successful login, presents them with the database of all photos, theirs and other users, as well as the ability to add more photos, change their password and log out. The photos displayed are pulled in from a handlebar, which structures each entry into a section. These entries are structured so the current user can only see a edit and delete button, on their entries. Upon any successful add, delete, or edit, the content is pulled in again, so the user can see their updates now in the database.

# Development Process
  This project was our second experince creating a full-stack website, with a backend and front end built by ourselves, but our first type working as a team to collaboratively create the site together.

  We were able to take a lot of what we have learned from our past project, and our own individual knowledges to create this application together

  As this was our first time building something like this from the ground up, using express, node.js, mongoDB,  mongoose and AWS so our primary goal was to make sure the calls to my api, the api itself, and the database were running correctly, before we went too depep into building the front end. The difficulty we encounted was realizing we needed a basic front end form to properly test the uploading of files. After having been able to CRUD my database, we then began to build the same calls but now incorporating ownership. Following that, we started to build out our jquery and api calls on our front end. We hit a few road blocks, when implementing handlebars, to help with preventing XSS, and when working on update/patch requests, and working with modals. We knew going in
  that these could cause the most trouble, but with the help of documentation, team work, and brainstorming, some instructor help, and reviewing
  past tickets from prior engineers, we was able to move past these issues. Once we were able to finally was able to CRUD through the front end, our final goal was to work on making sure the proper messaging appear for the users, and then working on the CSS for the site.

  As my web page progressed and problems were encountered, we found that utilizing past issues, in the project's issue cue, google, working with one another, and even just taking a step back, helped us push through many of the problems.

  Throughout this project, we were able to experience several different types of team work and team programming. Most often we utilized peer progamming, which allowd us to put two heads together, but we also utilized mob programming for difficult issues, and towards the end, we utilized working together remotely. We all leared a lot about the value of group promgramming by the end.

### Reflections
  Looking back on the project, we are able to take away several reflections and learnings that we believe will help  with our future endeavors.

  - We found that we hit a big road block when it came to the upate feature on the front-end website. As a team, using some great brainstorming and team working, we were able to push past it.

  - We have seen a large improvement on our comfort, understanding, and coding skill since our last project. We know that the learning path is never ending, but are proud of the improvements on our abilities since last project.

 # Future Goals

  As we continue to work on and update this project, we have the below goals we would like to accomplish:

  - Refactoring code to produce more DRY code, and reduce repeition
  - Working on improving modularity, and the usage of handlebars
  - Improving the mobile design of the site, to allow better use on smaller screens
  - Allow a user to view only their photos
  - Implement geo tagging of photos
  - Implement a database of tags to allow users to view images with specific tags

# Project User Stories and Wireframes

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to upload an image to AWS.
- As a signed in user, I would like to update the meta-data of my image on AWS.
- As a signed in user, I would like to see the name of all images on AWS.
- As a signed in user, I would like to see the thumbnail of all images on AWS.
- As a signed in user, I would like to delete the reference of my image from the database.
- As a signed in user, I would like to see the following meta-data for any    image:
  date created/uploaded
  date modified
  owner (user who uploaded the image)
  tags

  ## WireFrame
  ![img_1740](https://media.git.generalassemb.ly/user/20332/files/7a859c80-97f1-11e9-893d-9f07de86c6e7)
