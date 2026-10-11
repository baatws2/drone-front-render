FROM node:22-alpine
WORKDIR /app
COPY DroneFront-Server/package*.json ./DroneFront-Server/
RUN cd DroneFront-Server && npm ci --omit=dev
COPY DroneFront-Server ./DroneFront-Server
COPY DroneFront-Web ./DroneFront-Web
ENV HOST=0.0.0.0 PORT=8080
EXPOSE 8080
CMD ["node","DroneFront-Server/server.cjs"]
