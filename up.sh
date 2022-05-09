#!/bin/bash

rm -rf /server/obj /server/bin
docker-compose up --build -d
