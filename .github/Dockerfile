FROM node:16.16.0-alpine AS base

WORKDIR /app

ENV VUE_APP_API="https://restaurant-api.nimasfl.ir"
ENV USE_SSL="false"

COPY . .

RUN npm install

RUN npm run build
RUN ls /app

FROM registry.nimasfl.ir/react-nginx
COPY --from=base /app/build  /app
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
