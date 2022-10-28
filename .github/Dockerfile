FROM node:lts-alpine as base

WORKDIR /app

ENV VUE_APP_API="https://restaurant-api.nimasfl.ir"
ENV USE_SSL="false"

COPY package*.json ./

RUN npm install
RUN npm run build
RUN ls /app

FROM nginx

WORKDIR /usr/share/nginx/html/
COPY --from=base /app/build  /usr/share/nginx/html/
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
