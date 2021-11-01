#  pull official base image 
#  NodeJS LTS 14.18.1 version
FROM node:lts-alpine3.14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add application code to the directory
COPY . ./

# start app
CMD ["npm", "start"]