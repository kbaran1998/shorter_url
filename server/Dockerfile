FROM node:12

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src

# check files list
RUN ls -a

RUN npm install

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
