FROM node:9.2.0-alpine
LABEL maintainer="ziaxdk"
RUN apk add --update \
    python \
    build-base \
  && rm -rf /var/cache/apk/*
WORKDIR /here
ADD index.js /here
ADD package.json /here
ADD package-lock.json /here
RUN npm install --production
EXPOSE 3000
ENTRYPOINT npm start