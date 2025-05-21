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
CMD ["python", "app.py"]
