FROM node:20-alpine
WORKDIR /api
COPY package.json /api
RUN npm i
COPY . /api
CMD ["npm", "run", "server"]


