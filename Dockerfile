FROM node:18 as base 

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start-dev"]


FROM base as development 

RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start-dev"]


FROM base as production 

RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "start"]