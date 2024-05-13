# Use Node.js image as base
FROM node:16

# Set working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Expose port
EXPOSE 5050

# Command to run the server
CMD ["npm", "start"]
