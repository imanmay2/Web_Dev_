FROM node
ENV MONGO_DB_USERNAME=imanmay2\
    MONGO_DB_PWD=1234

RUN mkdir -p delta/app
COPY . /delta/app

RUN npm install
CMD ["node","/delta/app/server.js"]