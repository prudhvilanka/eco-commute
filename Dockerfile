FROM node:alpine


WORKDIR /eco_commute


COPY . .


RUN npm install

EXPOSE 3000
CMD npm run dev