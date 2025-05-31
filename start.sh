#!/bin/bash

echo "🔧 Buildam Docker image: meni-projekat"
docker build -t meni-projekat .

echo "🚀 Pokrećem Docker kontejner..."
docker run -d -p 10000:10000 meni-projekat

echo "🌐 Aplikacija je sada dostupna na http://localhost:10000"
