# National Parks App
An app made to keep track of a state's national parks, written with Javascript and Rails.

## About
The National Parks web app is an app made to keep track of a state's national parks. Users can create new states, view the currently added states and their national parks, and delete states. All data is persisted to an SQLite database.

This web app uses a combination of Javascript and Rails. Rails serves as an API backend for the app, handling all AJAX requests for information. Javascript is used in the frontend to update pages dynamically without having to refresh the page itself.

## Usage
Currently, to run the app, you need to run a development server locally.

Before you start, make sure that you have all the requirements you need to run the app (ruby, rails, and bundler, in addition to a modern browser).

First, clone this repository and `cd` into the directory:
```sh
$ git clone https://github.com/DrewDalmedo/park-app
$ cd park-app
```

Move over to the `park-app-frontend` directory and open `index.html` in your browser. On MacOS, the process can be done as follows:
```sh
$ cd park-app-frontend
$ open index.html
```

Next, `cd` into the `park-app-backend` directory and run `bundle install`
```sh
$ cd ../park-app-backend && bundle install
```

After installing the app's dependencies, you need to run a database migration:
```sh
$ rails db:migrate
```

If you want the database to be populated, you must also seed the database:
```sh
$ rails db:seed
```

Finally, run `rails s` and refresh the `index.html `page in your browser:
```sh
$ rails s
```