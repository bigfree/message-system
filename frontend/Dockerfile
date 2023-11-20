FROM node:20-alpine

# set working directory
WORKDIR /frontend

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]