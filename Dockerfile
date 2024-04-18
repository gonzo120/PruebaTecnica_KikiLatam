
FROM node:18.19.1
WORKDIR /app
COPY . .
RUN npm install


EXPOSE 3000
CMD ["npm", "run", "start:dev"]