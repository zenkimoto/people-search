# Pull LTS node image and alias as build
FROM node:14.17-alpine3.10 AS build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 

# Copy source
COPY . ./

# Build React App
RUN yarn build

# Pull nginx Web Server
FROM nginx:stable-alpine

# Copy from build (node image aliased above)
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start
CMD ["nginx","-g","daemon off;"]