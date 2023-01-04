# stage one
FROM node:lts-alpine 

WORKDIR /api

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# stage two

EXPOSE 3000

# COPY package*.json ./

# RUN npm install --only=production


CMD [ "npm", "start" ]