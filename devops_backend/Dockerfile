# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /devops_backend

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the files
COPY . .

# Expose port and start application
EXPOSE 5000
CMD ["node", "index.js"]
