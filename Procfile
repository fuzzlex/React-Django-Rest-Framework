worker: python manage.py collectstatic --noinput
web : waitress-serve --listen=*:8000 core.wsgi:application