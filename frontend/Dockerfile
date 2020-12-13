FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY ./src ./src
COPY ./angular.json ./
COPY ./tsconfig.json ./
COPY ./tsconfig.app.json ./
COPY ./tslint.json ./
COPY ./package.json ./
EXPOSE 4200
RUN npm install