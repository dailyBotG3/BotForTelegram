# syntax=docker/dockerfile:1

FROM node:16.14.0
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 
CMD [ "node", "index.js" ]
COPY .  .