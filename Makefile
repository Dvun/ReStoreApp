up:
	docker-compose up --build -d
down:
	docker volume prune -f
	docker-compose down
	docker system prune -f
