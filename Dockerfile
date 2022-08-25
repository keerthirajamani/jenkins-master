FROM node:18
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install --production
CMD [ "node", "Routes/nodeServer.js" ]