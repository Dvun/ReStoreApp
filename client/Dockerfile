FROM node:lts-alpine
WORKDIR /app

COPY /.env.dev ./.env
COPY package.json /app

RUN npm install
COPY . /app
RUN chown -R node /app/node_modules
USER node
EXPOSE 3000
CMD ["npm", "run", "start"]
