echo "RUNNING SERVER"

#echo "WAITING FOR MYSQL"
#
#until mysqladmin ping -h db -u root -p$MYSQL_ROOT_PASSWORD --silent; do
#    sleep 2
#done

echo "MIGRATING"

#python portfolio/manage.py makemigrations
#python portfolio/manage.py migrate

#python portfolio/manage.py runserver

gunicorn portfolio.wsgi:application --bind 0:8000