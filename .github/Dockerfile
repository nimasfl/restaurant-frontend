FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app
ENV VUE_APP_API="https://restaurant-api.nimasfl.ir"
COPY package*.json ./

RUN npm install

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
