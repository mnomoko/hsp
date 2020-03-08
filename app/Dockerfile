FROM node:12.2.0-alpine AS build

# Create and set workdir
WORKDIR /gatsby

RUN \
  apk add --no-cache --update python curl make g++ && \
  apk add vips-dev fftw-dev build-base --update-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/v3.11/community \
    --repository https://alpine.global.ssl.fastly.net/alpine/v3.11/main \
  && rm -fR /var/cache/apk/*

# Install nodejs global packages
RUN yarn global add gatsby

# Copy package.json to cache packages image layer
COPY package.json /gatsby/

# Install nodejs local packages
RUN yarn install

# Copy sourcecode files
COPY . /gatsby/

RUN chmod +x ./wait-for-strapi.sh


# Stage 2: Web Server
#FROM nginx:alpine
#
#COPY nginx /etc/nginx/
#COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
#RUN touch /var/run/nginx.pid \
#    && chown nginx:nginx /var/run/nginx.pid \
#    && chown -R nginx:nginx /var/cache/nginx
#
#USER nginx
#
#EXPOSE 8080
#HEALTHCHECK CMD [ "wget", "-q", "localhost:8080" ]
