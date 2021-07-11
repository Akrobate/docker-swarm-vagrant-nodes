# Ansible

## Install on ubuntu 20.04

```bash
sudo apt update
sudo apt install ansible
```


## Example host file with configurations

```ini
[testvmmachine]
192.168.1.200


[testvmmachine:vars]
ansible_ssh_private_key_file=../privates/rsa_key
ansible_ssh_extra_args= -o "StrictHostKeyChecking no" -o "UserKnownHostsFile /dev/null"
ansible_user=vagrant
```

## Testing connection

```bash
# targeting specific hosts group testvmmachines
ansible testvmmachine -i ./ansible/hosts -m ping

# all hosts
ansible all -i ./ansible/hosts -m ping
```

## Execute command on remote

```bash
ansible all -i ./hosts -a "/bin/echo hello"
```

## Executing a playbook

```bash
ansible-playbook -i ./hosts playbookname.yml
```
