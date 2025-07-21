FROM node:16-alpine

RUN mkdir   /ec_frontend

WORKDIR /ec_frontend

COPY package.json yarn.lock ./

RUN npm install

COPY .env ./


COPY next.config.js ./next.config.js

COPY pages ./pages

COPY public ./public

COPY components ./components

COPY database ./database

COPY css ./css

COPY interfaces ./interfaces

COPY lib/api.ts ./lib/api.ts


RUN yarn build

CMD [ "yarn", "dev" ]