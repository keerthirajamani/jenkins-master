# docker stop $(docker ps -q -a)
# docker rm $(docker ps -q -a)
docker swarm init
docker-compose up -d