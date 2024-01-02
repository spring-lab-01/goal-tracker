# Goal Tracker
Application to track and manage your goals

## Tech Stack 
 - Backend
   - Java 17
   - Spring boot - 3.2.0
   - Gradle 8.5
   - H2 
 - Frontend
   - Node - v20.7.0
   - React

## How to Build & Run
- Build Frontend - Run below command inside folder `goal-tracker`
  ```
  cd frontend && npm install && npm run build
  ```
- Build Backend
  ```
  cd ../backend && gradle build
  ```
- Build Docker Image
  ```
  docker build -t reureka/gt .
  ```
- Run Docker Image
  ```
  docker run -p 8081:8081 reureka/gt
  ```
- Run Application at port 8081 - open browser and enter url
  ```
  localhost:8081
  ```

# References
- UI
  - [Materialize CSS](https://materializecss.com/about.html)
  - [React](https://react.dev/learn)
- Containerization
  - [Spring Boot with Docker](https://spring.io/guides/topicals/spring-boot-docker/)
  - [Java images using Docker](https://docs.docker.com/language/java/build-images/)
