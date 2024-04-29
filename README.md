To clone the project, please run below command:
git clone https://github.com/lohith495/task-manager.git

To install required dependencies, please run below command in this project directory in local:
npm install

To run the application, please run below node command:
node index.js

To test the application, below are the api's and respective request body and expected response:

1. GET /tasks --> used to fetch all the tasks defined in tasks.json

2. GET /tasks/id
   example-
   resource: /tasks/15
   request body : not required
   response status: 200 OK
   response body:
   [
    {
        "id": 15,
        "title": "Install jsonwebtoken",
        "description": "Install jsonwebtoken",
        "completed": false
    }
]

3. POST /tasks
   example-
   request body:
               {
                "title": "Install Mongo",
                "description": "Install Mongo",
                "completed": false
              }
   response status: 201
   response body:
   {
    "title": "Install Mongo",
    "description": "Install Mongo",
    "completed": false,
    "id": 16
}

4. PUT /tasks/id
   example -
   resourec/uri: /tasks/16
   request body:
               {                
                "title": "Install Redis",
                "description": "Install Redis",
                "completed": true
            }
   response status: 201
   response body:
   {
    "title": "Install Redis",
    "description": "Install Redis",
    "completed": true,
    "id": 16
}

5. DELETE /tasks/id
   example -
   resource/uri: /tasks/16
   request body: not required
   response status: 200
   response body: Task 16 Deleted successfully
