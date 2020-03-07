#!/bin/sh
# wait-for-strapi.sh

set -e

cmd="gatsby develop -H 0.0.0.0"

until $(curl --output /dev/null --silent --head --fail http://$STRAPI_URL_SH); do
    >&2 echo  "Strapi is unavailable - sleeping"
    sleep 5
done

>&2 echo "Strapi is up - executing command"
exec $cmd
