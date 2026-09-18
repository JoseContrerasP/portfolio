echo "RUNNING SERVER"

echo "MIGRATING"

python manage.py collectstatic --no-input

gunicorn portfolio.wsgi:application --bind 0:8000