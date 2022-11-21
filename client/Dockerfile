FROM node:alpine as builder
RUN apk --no-cache add git

FROM nginx:alpine as server
EXPOSE 80
COPY . /etc/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# language-flash
FROM builder as lfBuilder
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-language-flash.git
WORKDIR /app/meDotCom-language-flash
RUN npm i
RUN npm run build
WORKDIR /app
COPY . .
FROM server as lfServer
COPY --from=lfBuilder /app/meDotCom-language-flash/dist /etc/nginx/html/svelte-apps/language-flash/

# home react apps
FROM builder as hraBuilder
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-react-home.git
WORKDIR /app/meDotCom-react-home
RUN npm i
RUN npm run build
WORKDIR /app
COPY . .
FROM server as hraServer
COPY --from=hraBuilder /app/meDotCom-react-home/build/static /etc/nginx/html/react-apps/home/

# projects react apps
FROM builder as praBuilder
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-react-projects.git
WORKDIR /app/meDotCom-react-projects
RUN npm i
RUN npm run build
WORKDIR /app
COPY . .
FROM server as praServer
COPY --from=praBuilder /app/meDotCom-react-projects/build/static /etc/nginx/html/react-apps/projects/

# resume react app
FROM builder as rraBuilder
WORKDIR /app
RUN git clone https://github.com/spope851/meDotCom-react-resume.git
WORKDIR /app/meDotCom-react-resume
RUN npm i
RUN npm run build
WORKDIR /app
COPY . .
FROM server as rraServer
COPY --from=rraBuilder /app/meDotCom-react-resume/build/static /etc/nginx/html/react-apps/resume/

# all apps
FROM server as allServer
# language-flash
COPY --from=lfBuilder /app/meDotCom-language-flash/dist /etc/nginx/html/svelte-apps/language-flash/
# home react apps
COPY --from=hraBuilder /app/meDotCom-react-home/build/static /etc/nginx/html/react-apps/home/
# projects react apps
COPY --from=praBuilder /app/meDotCom-react-projects/build/static /etc/nginx/html/react-apps/projects/
# resume react app
COPY --from=rraBuilder /app/meDotCom-react-resume/build/static /etc/nginx/html/react-apps/resume/
