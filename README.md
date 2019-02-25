# Todo_Api_fastify_mongodb
TODO API using Fastify with Mongodb for front end developers who dont want any hustle with backend code development  

# Installation local
---- Requirements ----
- Node 8.*
- Npm or yarn
- MongoDB 10.*

Start your mongodb 
```$xslt
$ mongod or sudo mongod
```
Clone the repository to your machine

```
 $ git clone https://github.com/songokjesse/Todo_Api_fastify_mongodb.git
 $ cd to Todo_Api_fastify_mongodb
```

Install dependencies

```$xslt
$ yarn or npm install
```
create .env file
```$xslt
$ cp .example_env .env
```
Add your environment variable

```$xslt
 APP_HOST = {your application host}
 APP_PORT = {your application port}
 
 MONGO_URL = {your mongodb url e.g 'mongodb://localhost:27017/ApiProjects'}
```
# API Access and use
Use postman to test the api routes e.g 

List all tasks (GET)
```$xslt
http://{yourhost:yourport}/api/tasks
```
create a task (POST)
```$xslt
http://{yourhost:yourport}/api/task
```
show a task (GET)
```$xslt
http://{yourhost:yourport}/api/task/{id}
```
Update a task (PUT)
```$xslt
http://{yourhost:yourport}/api/task/{id}
```
Delete a task (DELETE)
```$xslt
http://{yourhost:yourport}/api/task/{id}
```
![alt text](screenshots/postman_screenshot.png)


For swagger documentation, access it on

```$xslt
 http://{yourhost:yourport}/documentation
```

# Installation Docker
- Comming Soon

# Testing API 
- Comming Soon

# The Api's screenshot
![alt text](screenshots/api_swagger_screenshot.png)
