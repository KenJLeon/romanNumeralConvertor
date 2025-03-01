FROM node:20-alpine
WORKDIR /client
COPY package*.json /client
RUN npm i
ENV API_URL ${API_URL}
COPY . /client
CMD ["npm", "run", "start"]


