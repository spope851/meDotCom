FROM python:3-alpine as scraper
WORKDIR /usr/src/app
COPY ./scraper/requirements.txt ./
RUN \
  apk add --no-cache postgresql-libs && \
  apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
  python3 -m pip install -r requirements.txt --no-cache-dir && \
  apk --purge del .build-deps
COPY . .
WORKDIR /usr/src/app/scraper
RUN python ./mandarin.py

FROM postgres:alpine
ENV POSTGRES_PASSWORD=postgres_password
COPY ./sql/create_tables.sql /docker-entrypoint-initdb.d/create_tables.sql
COPY ./sql/insert_content.sql /docker-entrypoint-initdb.d/insert_content.sql
COPY ./sql/insert_truths.sql /docker-entrypoint-initdb.d/insert_truths.sql
COPY --from=scraper /usr/src/app/sql/insert_data.sql /docker-entrypoint-initdb.d/insert_data.sql
