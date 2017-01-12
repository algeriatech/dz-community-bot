FROM node:7

ENV TZ Africa/Algiers

RUN curl -Lo- https://yarnpkg.com/install.sh | bash
ENV PATH $HOME/.yarn/bin:$PATH

ADD . /app
WORKDIR /app
RUN $HOME/.yarn/bin/yarn --prod

CMD ["npm", "start"]
