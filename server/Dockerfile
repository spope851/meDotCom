FROM node:14.14.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN apk --no-cache --virtual build-dependencies add \
        python \
        make \
        g++ \
    && npm i
COPY . .
CMD ["npm", "run", "dev"]