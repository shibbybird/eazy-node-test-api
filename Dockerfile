FROM node:10

RUN useradd -ms /bin/bash eazyci
USER eazyci

WORKDIR /home/eazyci

COPY ./ /home/eazyci

RUN npm install

CMD npm start
