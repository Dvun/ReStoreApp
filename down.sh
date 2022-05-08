#!/bin/bash

docker-compose down
docker system prune -f
rm -rf /node_modules
