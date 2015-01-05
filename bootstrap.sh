#!/usr/bin/env bash

sudo apt-get update
sudo apt-get upgrade
sudo apt-get -y install unzip curl python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs
cd /vagrant
npm install