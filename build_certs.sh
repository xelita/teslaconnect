sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx/ssl/private/nginx-selfsigned.key -out nginx/ssl/certs/nginx-selfsigned.crt
sudo openssl dhparam -out nginx/ssl/certs/dhparam.pem 2048
