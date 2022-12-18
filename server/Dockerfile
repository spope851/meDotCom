FROM node:14.14.0-alpine as builder
RUN apk update \
    && apk add yarn curl bash python g++ make \
    && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package.json yarn.lock ./
# install dependencies
RUN yarn --frozen-lockfile
COPY . .
# remove development dependencies
RUN npm prune --production

FROM node:14.14.0-alpine
WORKDIR /app
# copy from build image
COPY --from=builder /app/server.js /app/keys.js /app/package.json /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/utils ./utils
CMD ["npm", "run", "dev"]
