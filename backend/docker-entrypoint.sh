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

echo "🧑‍💻 Creating superuser"
./manage.py createsuperuser --noinput

echo "📦 Collecting Static Files"
./manage.py collectstatic --noinput

echo "🆙 Starting..."
./manage.py runserver 0.0.0.0:8000

exec "$@"
