# The builder from node image
FROM node:12.2.0-alpine as builder

#RUN apk update && apk add --no-cache make git
RUN apk --no-cache add python make g++

# Move our files into directory name "app"
WORKDIR /app
COPY package.json  /app/
RUN npm install gatsby -g
RUN cd /app && npm install
COPY .  /app/

RUN cd /app && gatsby develop
