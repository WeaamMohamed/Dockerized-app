# Dockerized Node.js Application with MongoDB, Redis, and Nginx
This project is a learning exercise to demonstrate how to containerize a Node.js application using Docker. It includes:
- MongoDB for database storage,
- Redis for caching, and
- Nginx as a reverse proxy.

The goal is to understand Docker concepts, container orchestration, and how to integrate multiple services in a Dockerized environment. This is not a full-fledged production application but a simple example for educational purposes.


## Technologies Used
- **Node.js**: Backend server.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: Database for storing application data.
- **Redis**: In-memory data store for caching.
- **Nginx**: Reverse proxy and load balancer.
- **Docker**: Containerization for easy deployment.


## Development Mode
To run the application in development mode, use the docker-compose.dev.yml file:
### docker-compose -f docker-compose.dev.yml up -d

## Production Mode
To run the application in production mode, use the docker-compose.prod.yml file:
### docker-compose -f docker-compose.prod.yml up -d

