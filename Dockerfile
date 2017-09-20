FROM kyma/docker-nginx

COPY build/ /var/www

EXPOSE 80
CMD 'nginx'