FROM python:3.12

RUN apt-get update && apt-get install -y \
    default-mysql-client \
    default-libmysqlclient-dev \
    gcc \
    musl-dev \
    libffi-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /portfolio

COPY . .

RUN pip install -r requirements.txt

RUN chmod +x entrypoint.sh

ENTRYPOINT ["bash", "entrypoint.sh"]