FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm
COPY . .

RUN pnpm install --frozen-lockfile

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

EXPOSE 3000

CMD ["pnpm", "dev"]