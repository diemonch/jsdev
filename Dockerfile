FROM node:10-alpine

WORKDIR /home/ubuntu/node/app

COPY package*.json /home/ubuntu/node/app

RUN npm install

COPY . /home/ubuntu/node/app

CMD [ "node", "index.js" ]

EXPOSE 3000