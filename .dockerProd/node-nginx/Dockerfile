# этап сборки (build stage)
FROM node:lts-alpine as log-social-front-build-prod
WORKDIR /app
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn install
RUN yarn build

# этап production (production-stage)
FROM nginx:stable-alpine as log-social-front-nginx-prod
COPY --from=log-social-front-build-prod /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]