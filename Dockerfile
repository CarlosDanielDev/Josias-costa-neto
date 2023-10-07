FROM node:19-alpine as build

WORKDIR /usr/app/
ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package.json /usr/app/package.json
RUN npm install --silent
#
COPY . /usr/app

RUN npm run build

FROM nginx:1.16.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY .docker/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

