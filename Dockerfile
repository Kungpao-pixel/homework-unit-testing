FROM node

WORKDIR /todo

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]