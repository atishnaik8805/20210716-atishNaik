FROM mhart/alpine-node

EXPOSE 5000
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD ["node start"]