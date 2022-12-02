FROM node:16-alpine
# ENV NODE_ENV=production
WORKDIR /usr/app
COPY package.json ./
RUN yarn
COPY . .
EXPOSE 3000 
CMD ["yarn", "run","dev"]
