FROM node:16.16.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

EXPOSE 8800
CMD [ "node", "server.js" ]