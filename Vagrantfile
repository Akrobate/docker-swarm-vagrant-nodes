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
        # master.vm.provision :shell, path: "provisioning.sh"
        master.vm.provision "shell",
            inline: "cat /home/vagrant/.ssh/rsa_key.pub >> /home/vagrant/.ssh/authorized_keys"
    end
    
    config.vm.define "worker1" do |worker1|
        worker1.vm.box = "ubuntu/focal64"
        worker1.vm.hostname = "worker1"
        worker1.vm.network "public_network", ip: "192.168.1.210"  
        worker1.vm.provider "virtualbox" do |vb|
            vb.memory = "1024"
        end
        worker1.vm.provision "file", source: "./privates/rsa_key.pub", destination: "$HOME/.ssh/"
        # worker1.vm.provision :shell, path: "provisioning.sh"
        worker1.vm.provision "shell",
            inline: "cat /home/vagrant/.ssh/rsa_key.pub >> /home/vagrant/.ssh/authorized_keys"
    end
    
    config.vm.define "worker2" do |worker2|
        worker2.vm.box = "ubuntu/focal64"
        worker2.vm.hostname = "worker2"
        worker2.vm.network "public_network", ip: "192.168.1.211"  
        worker2.vm.provider "virtualbox" do |vb|
            vb.memory = "1024"
        end
        worker2.vm.provision "file", source: "./privates/rsa_key.pub", destination: "$HOME/.ssh/"
        # worker2.vm.provision :shell, path: "provisioning.sh"
        worker2.vm.provision "shell",
            inline: "cat /home/vagrant/.ssh/rsa_key.pub >> /home/vagrant/.ssh/authorized_keys"
    end
    
    config.vm.define "worker3" do |worker3|        
        worker3.vm.box = "ubuntu/focal64"
        worker3.vm.hostname = "worker3"
        worker3.vm.network "public_network", ip: "192.168.1.212"  
        worker3.vm.provider "virtualbox" do |vb|
            vb.memory = "1024"
        end
        worker3.vm.provision "file", source: "./privates/rsa_key.pub", destination: "$HOME/.ssh/"
        # worker3.vm.provision :shell, path: "provisioning.sh"
        worker3.vm.provision "shell",
            inline: "cat /home/vagrant/.ssh/rsa_key.pub >> /home/vagrant/.ssh/authorized_keys"
    end
    
end
