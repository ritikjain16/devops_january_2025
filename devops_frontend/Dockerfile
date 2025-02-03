FROM node:18-alpine AS builder  # ✅ Use a valid image

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
