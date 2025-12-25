FROM node
ENV MONGO_DB_USERNAME=imanmay2
ENV MONGO_DB_PWD=Manmay_1234
# RUN mkdir -p delta/app
WORKDIR /delta/app
COPY package*.json .
RUN npm install
COPY . .
CMD ["node","/delta/app/server.js"]