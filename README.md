# docker-swarm-vagrant-nodes



https://www.grottedubarbu.fr/introduction-docker-swarm/





version: "3"
services:
  viz:
    image: dockersamples/visualizer
    volumes:
       - "/var/run/docker.sock:/var/run/docker.sock"
    ports:
       - "8080:8080"