FROM node:alpine

RUN apk update && apk upgrade && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash

RUN npm install -g strapi

WORKDIR /strapi

COPY ./package.json /strapi/

RUN npm install

COPY . /strapi/

EXPOSE 1337

CMD strapi develop
