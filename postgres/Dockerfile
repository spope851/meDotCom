FROM python:3 as scraper
WORKDIR /usr/src/app
COPY ./scraper/requirements.txt ./
RUN pip install --no-cache-dir --upgrade pip \
  && pip install --no-cache-dir -r requirements.txt
COPY . .
WORKDIR /usr/src/app/scraper
RUN python ./mandarin.py

FROM postgres:latest
ENV POSTGRES_PASSWORD=postgres_password
COPY ./sql/create_tables.sql /docker-entrypoint-initdb.d/create_tables.sql
COPY --from=scraper /usr/src/app/sql/insert_data.sql /docker-entrypoint-initdb.d/insert_data.sql
