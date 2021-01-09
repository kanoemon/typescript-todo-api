#!/bin/sh
sudo su ec2-user
id
source /home/ec2-user/.bashrc

cd  /var/www/typescript-todo-api
npm install
npm run build
