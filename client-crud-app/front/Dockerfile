FROM node:22

RUN mkdir /work/
RUN mkdir /work/config/ /work/projet/

COPY ./config/docker-entrypoint.sh /work/config/

WORKDIR /work/projet/

ENTRYPOINT sh /work/config/docker-entrypoint.sh