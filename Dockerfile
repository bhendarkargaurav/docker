FROM node:latest

COPY server.js /home/app/server.js
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm install

EXPOSE 5001

CMD ["node", "server"]