FROM python:3.12-slim

# Postavi radni direktorij
WORKDIR /app

# Kopiraj sve fajlove u kontejner
COPY . /app

# Instaliraj Flask
RUN pip install flask

# Otvori port 5000
EXPOSE 5000

# Pokreni aplikaciju
CMD ["python", "app.py"]
