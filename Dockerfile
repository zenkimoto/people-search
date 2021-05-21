# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package.lock.json ./
RUN npm install 
# RUN npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
# RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

EXPOSE 3000

EXPOSE $PORT

# start app
CMD ["npm", "start"]