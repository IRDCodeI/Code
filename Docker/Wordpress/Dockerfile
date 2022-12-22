FROM ubuntu

RUN apt-get update -y && apt-get install -y apache2 && rm /var/www/html/index.html

WORKDIR /var/www/html/

COPY . .

ENTRYPOINT ["/usr/sbin/apache2ctl"]

CMD ["-D", "FOREGROUND"] 