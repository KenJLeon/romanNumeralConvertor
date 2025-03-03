FROM node:20-alpine
WORKDIR /client
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]


