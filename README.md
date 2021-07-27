# docker-swarm-vagrant-nodes

## Generating privates

```bash
cd private/
./generate_rsa_keys.sh
```

## Vagrant

```bash
vagrant up
```

## Ansible

```bash
# All commands must be run from the ansible folder
cd ansible/

# Install docker and its dependencies
ansible-playbook -i hosts install-docker-playbook.yml

# Install docker compose
ansible-playbook -i hosts install-compose-playbook.yml

# Configure private registry authorization
ansible-playbook -i hosts authorize-insecured-docker-registry.yml

# Create Manager node
ansible-playbook -i hosts install-docker-master-playbook.yml

# Create Workers node
ansible-playbook -i hosts install-docker-worker-playbook.yml
```

# Deploy technical stacks

```bash
# From host machine enter in master vagrant virtual machine
vagrant ssh master

# Go to docker-swarm-stacks folder

# deploy viz stack
docker stack deploy --compose-file visualizer.docker-compose.yml visualizer

# deploy private registry
docker stack deploy --compose-file repository.docker-compose.yml registry
```


## Source links

https://www.grottedubarbu.fr/introduction-docker-swarm/


