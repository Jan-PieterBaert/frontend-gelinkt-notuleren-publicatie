FROM madnificent/ember:4.9.2 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN ember build -prod


FROM redpencil/fastboot-app-server:1.1.0
COPY --from=builder /app/dist /app
