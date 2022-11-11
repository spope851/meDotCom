FROM node:alpine as builder
RUN apk --no-cache add git
WORKDIR /app
# language-flash
COPY ./projects/language-flash-svelte ./projects/language-flash-svelte/
WORKDIR /app/projects/language-flash-svelte
RUN npm i
RUN npm run build
# home react apps
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-react-home.git
WORKDIR /app/meDotCom-react-home
RUN npm i
RUN npm run build
# projects react apps
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-react-projects.git
WORKDIR /app/meDotCom-react-projects
RUN npm i
RUN npm run build
# resume react app
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-react-resume.git
WORKDIR /app/meDotCom-react-resume
RUN npm i
RUN npm run build
WORKDIR /app
COPY . .

FROM nginx
EXPOSE 80
COPY . /etc/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# language-flash
COPY --from=builder /app/projects/language-flash-svelte/dist /etc/nginx/html/projects/language-flash-svelte/dist
# home react apps
COPY --from=builder /app/meDotCom-react-home/build/static /etc/nginx/html/react-apps/home/
# projects react apps
COPY --from=builder /app/meDotCom-react-projects/build/static /etc/nginx/html/react-apps/projects/
# resume react app
COPY --from=builder /app/meDotCom-react-resume/build/static /etc/nginx/html/react-apps/resume/
RUN chown -R www-data:www-data /etc/nginx/html/projects/language-flash-svelte && \
    chmod 755 /etc/nginx/html/projects/language-flash-svelte && \
    chmod 644 /etc/nginx/html/projects/language-flash-svelte/dist/bundle.js /etc/nginx/html/projects/language-flash-svelte/dist/bundle.css