# 07 Frameworks fullstack

- <a href="https://youtu.be/QjjKPfRMlsA" target="_blank">Lien vers la vidéo 07 (part 1)</a>
- <a href="https://youtu.be/N6NUZcpkCJ0" target="_blank">Lien vers la vidéo 07 (part 2)</a>


## prérequis

Laragon or mamp

php 

Node & npm

## Instalation

cloner le projet.

Run `composer i` & `npm i`

Crée un .env file est copier coller ceci dedans : 
``` APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:kYILQ3VQWs4YgKNDQbgBG8RBRKhZNWimJcAzu8Pgkio=
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=picard
DB_USERNAME=root
DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}" 
```
Modifier la partie sur la base de donnée en fonction de vos besoins et parametre.

Utiliser la commande `php artisan migrate --seed`, pour faire les migrations, crée la database et seeder la base de donnée.

## Run

Ouvrir deux terminal et run les commandes suivante `php artisan serve` && `npm run dev`
Aller sur le lien donner dans le terminal avec la commande php (probablement localhost:8000)

## Description