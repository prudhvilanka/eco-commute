FROM node:alpine


WORKDIR /eco_commute


COPY . .


RUN npm install
RUN npm run build
EXPOSE 3000
CMD npm run start