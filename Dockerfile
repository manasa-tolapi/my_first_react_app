FROM node:19-alpine AS first-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=first-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
