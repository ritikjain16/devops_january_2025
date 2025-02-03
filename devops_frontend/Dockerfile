# Step 1: Build the React app using Vite
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build  # This should generate the dist folder

# Check if dist folder is created (optional debugging step)
RUN ls -alh /app/dist  # List contents of the dist folder for debugging

# Step 2: Serve using Nginx
FROM nginx:alpine

# Copy the dist folder from the builder container to the Nginx container
COPY --from=builder /app/dist /usr/share/nginx/html

# Check if files were copied correctly (optional debugging step)
RUN ls -alh /usr/share/nginx/html  # List the files inside Nginx html folder

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
