FROM node:19-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:19-alpine as prod 

WORKDIR /app

COPY --from=build /app/dist /app/dist

EXPOSE 8080

COPY package.json .

COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8080

CMD [ "npm", "run", "preview" ]
