DOCKER_USERNAME ?= rostajecna
APPLICATION_NAME ?= play-zone.games
GIT_HASH ?= $(shell git log --format="%h" -n 1)

include .env
export

.PHONY: build push release run

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH}

release:
	docker pull ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH}
	docker tag ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH} ${DOCKER_USERNAME}/${APPLICATION_NAME}:latest
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}:latest

run:
	docker run -d --rm -p ${APP_PORT}:${APP_PORT} ${DOCKER_USERNAME}/${APPLICATION_NAME}:${GIT_HASH}
