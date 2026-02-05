## Here how the docker file work

// first tell what is your base img meanse which operating system you have to use

FROM ubuntu:latest  
as its ubuntu at start its empty nothing is there


//so as its owr node project so best practice is to pull node

FROM node:latest


now i have to send some file to the docker:
so

1. COPY server.js (my dir file) /home/app/server.js(in docker the path is)
COPY package.json /home/app/package.json



// if i have to enter /home/app/ directory

WORKDIR /home/app/

// now run  (packages)
RUN npm install 

CMD ["node", "server]