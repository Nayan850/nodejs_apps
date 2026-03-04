FROM node:18
WORKDIR /app
RUN npm init -y
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "server.js"]
