FROM mysql:latest
EXPOSE 3306
COPY ./sql.sql /tmp
CMD [ "mysqld", "--init-file=/tmp/sql.sql" ]