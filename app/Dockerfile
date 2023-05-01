FROM node:latest

#NOTE - Declate PortNumber variable 
ENV portNumber=8000

#NOTE - Choose work directory 
WORKDIR /app

COPY . .

#NOTE - install all dependencies  
RUN npm install

EXPOSE $portNumber

#NOTE - Run the server 
CMD [ "node","app/index.js" ]