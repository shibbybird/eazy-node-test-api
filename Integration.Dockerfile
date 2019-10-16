FROM node:10

RUN apt-get update
RUN apt-get install -y mysql-client

WORKDIR /root/build

COPY ./ /root/build

RUN npm install

CMD npm run integration
