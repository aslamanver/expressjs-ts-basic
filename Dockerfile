FROM node:10

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

# EXPOSE 3000

# RUN npm install -g nodemon

# CMD [ "nodemon", "index.js" ]