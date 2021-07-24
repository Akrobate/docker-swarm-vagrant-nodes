# GlusterFS

## Basic inspect commands

```bash
# List all nodes of a pool
sudo gluster pool list

# List all created volumes
sudo gluster volume list

# Information about volume
sudo gluster volume info

# Information peers
sudo gluster peer status
```

## Build cluster adding node

```bash

# Add node to the pool
sudo gluster peer probe 192.168.1.211
sudo gluster peer probe 192.168.1.212

```

## Create replicated volume

```bash
# Create new replicated with 3 replica volume
sudo gluster volume create test_shared_volume replica 3 \
    192.168.1.210:/gluster/volume1 \
    192.168.1.211:/gluster/volume1 \
    192.168.1.212:/gluster/volume1 \
        force

# Start volume
sudo gluster volume start test_shared_volume
```

## Mount disk on server

```bash
sudo mount.glusterfs localhost:/test_shared_volume /mnt/data
```

Configure mount volume on start of the server
```bash
sudo echo 'localhost:/test_shared_volume /mnt/data glusterfs defaults,_netdev,backupvolfile-server=localhost 0 0' >> /etc/fstab
```
