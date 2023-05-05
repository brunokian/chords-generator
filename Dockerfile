FROM node:17.7.1-slim
WORKDIR /home/app

COPY public public
COPY src src
COPY package.json package.json

RUN npm install

ENTRYPOINT ["npm", "start"]