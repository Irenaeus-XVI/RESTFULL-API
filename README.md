# Dockerize a RESTful API for Managing Person Objects

This repository contains a RESTful API for managing person objects, built with Node.js and Express.js, and Dockerize for easy deployment and scalability.



## Prerequisites
   Before you begin, make sure you have the following installed:

* Docker: https://docs.docker.com/get-docker/

## Technologies Used

The following technologies were used to build this project:

- Node.js
- Express.js
- Docker

## How to Run the Application in a Docker Container

To run the application in a Docker container, follow these steps:

1. pull the repository:

    **docker pull irenaeusxvi/restfull-api** 



2. Build the Docker image:

   **docker build . -t irenaeusxvi/restfull-api -f app/Dockerfile**


3. Run the Docker container:

    **docker run -p 8000:8000 irenaeusxvi/restfull-api**


    **The `-p` option maps the host port `8000` to the container port `8000`.**

    **This will start the API in a Docker container on `http://localhost:8000`.**



4. Open a web browser and navigate to `http://localhost:8000/persons` to access the API.





   **You should see a message indicating that the API is running.**




5. For Stopping a container

   **docker stop *<Container name in your  machine>***

## API Endpoints

The following API endpoints are available:

- `GET /api/persons` - get all persons
- `GET /api/persons/{:id}` - get person by ID
- `POST /api/persons` - create a new person
- `PUT /api/persons/{:id}` - update person by ID
- `DELETE /api/persons/{:id}` - delete person by ID




## For Testing(Recommended use Postman)


   ### To retrieve a list of all persons:

       http://localhost:8000/persons

   ### To retrieve a single person by ID:

       http://localhost:8000/persons/{id}

   ### To update a person by ID:

       http://localhost:8000/persons/{id}

   ### To delete a person by ID:

       http://localhost:8000/persons/{id}


## Conclusion

Dockerize a simple RESTful API for managing person objects using Node.js and Express.js is a straightforward process. By following the steps outlined in this README.md file, you should be able to Dockerize this API and run it in a Docker container on your local machine.

