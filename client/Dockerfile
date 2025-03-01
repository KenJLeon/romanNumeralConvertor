FROM node:20-alpine
WORKDIR /client
COPY package*.json /client
RUN npm i
COPY . /client
CMD ["npm", "run", "start"]


