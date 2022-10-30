FROM node:alpine as builder
WORKDIR /app
COPY ./projects/language-flash-svelte ./projects/language-flash-svelte/
WORKDIR /app/projects/language-flash-svelte
RUN npm i
RUN npm run build
WORKDIR /app
COPY . .

FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app /etc/nginx/html
RUN chown -R www-data:www-data /etc/nginx/html/projects/language-flash-svelte && \
    chmod 755 /etc/nginx/html/projects/language-flash-svelte && \
    chmod 644 /etc/nginx/html/projects/language-flash-svelte/dist/bundle.js /etc/nginx/html/projects/language-flash-svelte/dist/bundle.css