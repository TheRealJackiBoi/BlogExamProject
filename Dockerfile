# Use official Node image as a base image
FROM node:20.9.0-alpine as build-stage

# Set the working directory inside the container
WORKDIR /app

# this will allow us to run vite and other tools directly
ENV PATH /usr/src/node_modules/.bin:$PATH

# inject all environment vars we'll need
ARG VITE_SUPAKEY
ARG VITE_DEPLOYED

# expose the variables to the finished container
ENV VITE_SUPAKEY=$VITE_SUPAKEY 
ENV VITE_DEPLOYED=$VITE_DEPLOYED

# Copy package.json and package-lock.json to the container
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY  . .

# Build the Vite app
RUN npm run build


FROM nginx:1.25
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
