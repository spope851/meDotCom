FROM node:alpine as builder
RUN apk --no-cache add git
# language-flash
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-language-flash.git
WORKDIR /app/meDotCom-language-flash
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
# copy all
WORKDIR /app
COPY . .

FROM nginx
EXPOSE 80
COPY . /etc/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# language-flash
COPY --from=builder /app/meDotCom-language-flash/dist /etc/nginx/html/svelte-apps/language-flash/
# home react apps
COPY --from=builder /app/meDotCom-react-home/build/static /etc/nginx/html/react-apps/home/
# projects react apps
COPY --from=builder /app/meDotCom-react-projects/build/static /etc/nginx/html/react-apps/projects/
# resume react app
COPY --from=builder /app/meDotCom-react-resume/build/static /etc/nginx/html/react-apps/resume/
