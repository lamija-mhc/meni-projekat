#!/bin/bash

echo "🛑 Gasim kontejner baziran na image-u meni-projekat..."
docker ps -q --filter ancestor=meni-projekat | xargs docker stop
