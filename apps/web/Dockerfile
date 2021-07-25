FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install --force

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY ./ /usr/src/app

#CMD [ "ls" ]
CMD [ "npm", "start" ]

