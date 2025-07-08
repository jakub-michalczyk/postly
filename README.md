<img src="https://github.com/jakub-michalczyk/postly/blob/master/public/images/logo.svg" width="200"/>

**POSTLY** is an application that fetches a list of posts from a public API and displays author details upon selecting a post. User data is cached in localStorage to reduce redundant HTTP requests.

## Features

- Fetches a list of posts from the API: https://jsonplaceholder.typicode.com/posts
- Displays post titles in a list
- On post click, loads the author's data based on the userId from the API: https://jsonplaceholder.typicode.com/users/{userId}
- Displays author name, email, and company name
- Caches user data locally (per session) to avoid repeated network requests
- Uses Angular Signals for state management

## Technologies Used

- **Angular 19**: For the front-end framework.
- **Tailwind CSS**: For styling.
- **RxJS**: For reactive programming and handling asynchronous data flows.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: Recommended version 16 or higher.
- **Angular CLI**: If not installed, you can install it globally using the command:

```bash
npm install -g @angular/cli
```

## Setup
- **Clone repository:**
```bash
git clone https://github.com/jakub-michalczyk/Postly
```

- **Navigate to the project folder:**
```bash
cd postly
```

- **Install the dependencies:**
```bash
npm install
```

- **Run the development server:**
```bash
ng serve
```

The app will be available at [http://localhost:4200](http://localhost:4200).

## Build for Production ##
To build the project for production, use the following command:
```bash
ng build --configuration=production
```
The build artifacts will be stored in the dist/ directory.

## License ##
This project is licensed under the MIT License - see the LICENSE file for details.
