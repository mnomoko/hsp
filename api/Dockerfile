FROM node:12.2.0-alpine

RUN apk update && apk upgrade && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash

RUN yarn global add strapi

WORKDIR /strapi

COPY ./package.json /strapi/

RUN yarn install

COPY . /strapi/

EXPOSE 1337

CMD strapi develop
