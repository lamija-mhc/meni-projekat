<<<<<<< HEAD
FROM python:3.12-slim
WORKDIR /app
COPY . /app
RUN pip install flask
EXPOSE 5000
=======
# Koristi službeni Python image
FROM python:3.11-slim

# Postavi radni direktorij u kontejneru
WORKDIR /app

# Kopiraj sve fajlove iz lokalnog direktorija u /app
COPY . /app

# Instaliraj Flask
RUN pip install flask

# Expose port koji Flask koristi
EXPOSE 5000

# Pokreni aplikaciju
>>>>>>> f3e0450bda5070790abc9cadec81d70ace13d68e
CMD ["python", "app.py"]
