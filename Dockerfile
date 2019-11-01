FROM alpine:3.10

# File Author / Maintainer
LABEL authors="huhn <huhn@einfachiota.de>"

# Update & install required packages
RUN apk add --update nodejs bash git npm

# Set work directory to /src
WORKDIR /app

# Install app dependencies
COPY package.json /app/package.json
RUN  npm install

# Copy app source
COPY . /app

RUN npm run build

# set your port
ENV PORT 3000

# expose the port to outside world
EXPOSE  3000

# start command as per package.json
CMD ["npm", "start"]
