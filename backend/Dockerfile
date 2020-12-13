FROM python:3
RUN mkdir /code
WORKDIR /code
COPY requirements.txt .
RUN python -m pip install -r requirements.txt
COPY . .