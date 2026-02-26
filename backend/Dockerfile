FROM node:18

# Vendos working directory
WORKDIR /app

# Kopjo package.json + package-lock.json
COPY package*.json ./

# Instalimi i dependencies
RUN npm install

# Kopjo të gjithë kodin
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]