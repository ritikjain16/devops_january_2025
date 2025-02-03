FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]
# Build the React app
RUN npm run build

# Use Nginx for serving the frontend
FROM nginx:alpine

# Copy build files to Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
