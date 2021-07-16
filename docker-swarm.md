# Docker Swarm

## Explore swarm

```bash
#List all nodes
docker node ls

#List all stacks
docker stack ls

#List all services
docker service ls

#List containers of a service
docker service ps service_name -f "desired-state=running"
# ID             NAME                     IMAGE                                 NODE      DESIRED STATE   CURRENT  STATE
# j3l7vvs2bioe   test-app_probe-app-2.1   192.168.1.200:5000/probe-app:latest   worker2   Running         Running 10 minutes ago
# ntmc03fmgrgj   test-app_probe-app-2.2   192.168.1.200:5000/probe-app:latest   worker1   Running         Running 10 minutes ago
# aw3xgo62fz80   test-app_probe-app-2.3   192.168.1.200:5000/probe-app:latest   worker3   Running         Running 10 minutes ago



```

## Explore swarm stack

```bash
docker stack services stack_name_to_preview
# ID             NAME                   MODE         REPLICAS   IMAGE                                 PORTS
# 5u03rs6780hn   test-app_probe-app-1   replicated   1/1        192.168.1.200:5000/probe-app:latest   *:3000->3000/tcp
# jip0jwrgnrbt   test-app_probe-app-2   replicated   3/3        192.168.1.200:5000/probe-app:latest   *:3001->3000/tcp
# bdep0kiy0htc   test-app_probe-app-3   global       4/4        192.168.1.200:5000/probe-app:latest   *:3002->3000/tcp
```


## Scale a service

```bash
docker service update --force test-app_probe-app-2
```

## Force rebalancing services on available nodes

### All services

for service in $(docker service ls -q); do docker service update --force $service; done

### Specific service

docker service update --force service_name_to_reballance

