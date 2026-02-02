# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Etapa 2: Servidor de Producción (Nginx)
FROM nginx:stable-alpine

# Copiar archivos compilados (Vite usa /dist)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

