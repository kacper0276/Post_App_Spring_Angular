# Post App

Post App is a web application designed for managing posts, developed with Spring Boot for the backend and Angular for the frontend. The application supports a range of functionalities including post management, commenting, liking, role-based access control, JWT authentication, real-time chat, and multilingual support.

## Features

- **Create Posts**: Users can create new posts.
- **View Posts**: Users can view a list of all posts.
- **Edit Posts**: Users can edit existing posts.
- **Delete Posts**: Users can delete posts.
- **Comment on Posts**: Users can add comments to posts.
- **Like Posts**: Users can like posts to express appreciation.
- **Role-based Access**: Different roles (e.g., Admin, User) have distinct permissions and access levels.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Real-time Chat**: Users can engage in real-time chat with other users.
- **Multilingual Support**: The application supports multiple languages, allowing users to select their preferred language.

## Technologies

### Backend

- **Spring Boot**: A framework for creating stand-alone, production-grade Spring-based applications.
- **Spring Data JPA**: Simplifies data access and interaction with the MySQL database.
- **MySQL**: The primary database used for storing application data.
- **Spring Security**: Provides authentication and authorization mechanisms.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and session management.
- **WebSocket**: Enables real-time communication for the chat feature.

### Frontend

- **Angular**: A TypeScript-based framework for building dynamic single-page applications (SPAs).
- **@stomp/stompjs**: A JavaScript library for STOMP protocol support, used for WebSocket communication.
- **@types/sockjs-client**: TypeScript definitions for SockJS client, aiding in type safety.
- **ngx-toastr**: A library for displaying toast notifications in Angular applications.
- **rxjs**: A library for reactive programming using observables, facilitating asynchronous data handling.
- **sockjs-client**: A JavaScript library for WebSocket emulation, enabling fallback options.

## Installation

To set up the project locally:

1. Clone the repository:
```bash
git clone https://github.com/kacper0276/Post_App_Spring_Angular.git
```
2. Navigate to the backend directory:
```bash
cd Post_App_Spring_Angular/backend
```
3. Update the application.properties file with your MySQL database configuration:
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/postapp
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
```
4. Build and run the Spring Boot application:
```bash
mvn clean install
mvn spring-boot:run
```
5. Navigate to the frontend directory:
```bash
cd ../frontend
```
6. Install dependencies:
```bash
npm install
```
7. Start the Angular development server:
```bash
ng serve
 ```
The application will be available at `http://localhost:4200`.

## Configuration

### Backend

Adjust the MySQL database settings in `src/main/resources/application.properties`.

### Frontend

Configure API endpoints and environment settings in `src/environments/environment.ts`.

## Contributing
Contributions are welcome! To contribute, please fork the repository and create a pull request. Be sure to review the contribution guidelines and coding standards before submitting changes.
