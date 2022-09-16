#!/bin/bash


#navigate into our working directory where we have all our github files
cd /home/ubuntu/ec2-user/express-app


#install node modules
npm install

#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null & 