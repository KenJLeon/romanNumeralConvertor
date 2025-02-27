FROM node:20-alpine
WORKDIR /client
COPY package*.json /client
RUN npm i
COPY . /client
RUN npm config set proxy ${PROXY_URL}
CMD ["npm", "run", "start"]


