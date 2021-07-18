# GlusterFS

## Basic commands

```bash
# List all nodes of a pool
sudo gluster pool list

# List all created volumes
sudo gluster volume list

# Add node to the pool
sudo gluster peer probe 192.168.1.211
sudo gluster peer probe 192.168.1.212

```


sudo gluster volume create test_shared_volume replica 3 192.168.1.210:/gluster/volume1 192.168.1.211:/gluster/volume1 192.168.1.212:/gluster/volume1 force


sudo gluster volume start test_shared_volume




sudo mount.glusterfs localhost:/test_shared_volume /mnt/data



sudo gluster volume info


sudo gluster peer status

