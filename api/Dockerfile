FROM node:20-alpine
WORKDIR /api
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 8080
CMD ["npm", "run", "server"]


