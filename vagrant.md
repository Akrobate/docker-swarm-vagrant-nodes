# Vagrant


## Installing vagrant

```bash
sudo apt update
sudo apt install virtualbox -y
```


```bash
wget https://releases.hashicorp.com/vagrant/2.2.16/vagrant_2.2.16_linux_amd64.zip
apt install zip unzip
unzip vagrant_2.2.16_linux_amd64.zip
```


```bash
curl -O https://releases.hashicorp.com/vagrant/2.2.9/vagrant_2.2.9_x86_64.deb

sudo apt install ./vagrant_2.2.9_x86_64.deb
```

## Init first vagrant project

Wanted base here is Ubuntu 20.04 LTS

```bash
mkdir vagrant-test-project
cd vagrant-test-project
vagrant init ubuntu/focal64
```

### Manually create a Vagrantfile

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
end
```

### Advanced Vagrant file

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  config.vm.network "public_network", ip: "192.168.1.200"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "file", source: "./privates/rsa_key.pub", destination: "$HOME/.ssh/"
  config.vm.provision :shell, path: "provisioning.sh"

end
```

### Advanced multimachine Vagrant file

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define "master" do |master|
    master.vm.box = "ubuntu/focal64"
    master.vm.hostname = "master"
    master.vm.network "public_network", ip: "192.168.1.200"
    master.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
    master.vm.provision "file", source: "./privates/rsa_key.pub", destination: "$HOME/.ssh/"
    master.vm.provision "shell",
      inline: "cat /home/vagrant/.ssh/rsa_key.pub >> /home/vagrant/.ssh/authorized_keys"
  end

  config.vm.define "worker" do |worker|
    worker.vm.box = "ubuntu/focal64"
    worker.vm.hostname = "worker"
    worker.vm.network "public_network", ip: "192.168.1.200"
    worker.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
    worker.vm.provision "file", source: "./privates/rsa_key.pub", destination: "$HOME/.ssh/"
    worker.vm.provision "shell",
      inline: "cat /home/vagrant/.ssh/rsa_key.pub >> /home/vagrant/.ssh/authorized_keys"
  end
end
```

### Start vagrant machine

```bash
vagrant up
```

### Stop vagrant machine

```bash
vagrant halt
```

### Clean vagrant env

```bash
vagrant destroy
```

### Login vagrant machine (using vagrant host)

```bash
vagrant ssh
```

### Login vagrant machine using ssh

```bash
ssh $(vagrant ssh-config | awk 'NR>1 {print " -o "$1"="$2}') localhost
```
or

```bash
ssh -i /path/to/vagrant/identity_file -p 2222 vagrant@localhost
```
