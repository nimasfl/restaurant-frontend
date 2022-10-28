FROM node:lts-alpine

WORKDIR /app

ENV VUE_APP_API="https://restaurant-api.nimasfl.ir"
ENV USE_SSL="false"

COPY package*.json ./

RUN npm install
RUN npm install -g @vue/cli

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
