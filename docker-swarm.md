# Docker Swarm

## Force rebalancing services on available nodes

### All services

for service in $(docker service ls -q); do docker service update --force $service; done

### Specific service

docker service update --force service_name_to_reballance

