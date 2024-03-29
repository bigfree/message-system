###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:20.3.1-alpine As development
EXPOSE 4000

WORKDIR /usr/src/message-system
COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn install
COPY --chown=node:node . .
RUN yarn prisma generate

USER node

###################
# BUILD FOR PRODUCTION
###################
FROM node:20.3.1-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build

ENV NODE_ENV production

RUN rm -rf node_modules && yarn install --frozen-lockfile

USER node

###################
# PRODUCTION
###################
FROM node:20.3.1-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]