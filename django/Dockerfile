FROM python:alpine3.9
ENV PYTHONUNBUFFERED 1
ENV APP_PATH /opt/apps
COPY requirements.txt $APP_PATH/
RUN pip install --no-cache-dir -r $APP_PATH/requirements.txt