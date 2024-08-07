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
 - Docker

## How to Build & Run (In MacOS)
- Build Frontend - Run below command inside folder `goal-tracker`
  ```
  cd frontend 
  ```

  install node modules and buld ui 
  ```
  npm install  
  npm run build
  ```
  ** npm run build - command will build and copy ui resources inside src/resources

- Build Backend - Run below command inside folder `goal-tracker`

  ```
  cd backend 
  ```
  build backend
  ```
  sh gradlew build
  ```
- Build Docker Image
  ```
  docker build -t hkchauhan022/gt .
  ```
- Run Docker Image
  ```
  docker run -p 8081:8081 hkchauhan022/gt
  ```
- Run Application at port 8081 - open browser and enter url
  ```
  localhost:8081
  ```
### Run in Local Kubernetes Cluster
- Enable Kubernetes In Docker
  - https://docs.docker.com/desktop/kubernetes/#install-and-turn-on-kubernetes
- Run command
  ```angular2html
  kubectl apply -f kubernetes.yml
  ```
- Verify application
  ```angular2html
    kubectl get all 
  ```
  This should have `deployment.apps/goal-tracker`
- Access application at - http://localhost:30001/
    
- Delete Kubernetes Deployment
    ```
    kubectl delete -f kubernetes.yml
    ```
  
# References
- UI
  - [Materialize CSS](https://materializecss.com/about.html)
  - [React](https://react.dev/learn)
  - Use this command to generate new component 
  ```
  npx generate-react-cli component <component name>
  ```
- Containerization
  - [Spring Boot with Docker](https://spring.io/guides/topicals/spring-boot-docker/)
  - [Java images using Docker](https://docs.docker.com/language/java/build-images/)
  - https://docs.docker.com/language/java/deploy/
