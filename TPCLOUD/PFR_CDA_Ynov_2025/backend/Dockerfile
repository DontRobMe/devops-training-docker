FROM node:18-alpine

RUN apk update && apk add --no-cache openssl ca-certificates

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000