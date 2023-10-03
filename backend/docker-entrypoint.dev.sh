#!/usr/bin/env bash

# Apply database migrations
echo "Apply database migrations"
./bin/wait-for-it.sh -t 5 db:5432 -- echo "✅ DB is up"

COUNTER=0

while
  ./manage.py migrate --noinput
  M=$?
  [[ $M -eq 1 ]] && [ $COUNTER -lt 10 ]
do
  ((COUNTER++))
  echo "⚠️ couldn't migrate, tyring again shortly"
  echo "    (attempt $COUNTER of 10)"
  sleep 3
done

./manage.py checkdata

if [ $? -eq 0 ]; then
  echo "✅ Data already present"
else
  echo "📦 Loading fixtures..."
  ./manage.py loaddata data/initial-fixture.json

  echo "🧑‍💻 Creating superuser"
  ./manage.py createsuperuser --noinput
fi


echo "🆙 Starting..."
./manage.py runserver 0.0.0.0:8000

exec "$@"
