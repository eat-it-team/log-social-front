# Социальный профиль

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```
### Основной стек технологий:
JavaScript, TypeScript, HTML, CSS

Vue.js, Tailwind CSS

Chart.js, Yandex maps

Docker, Docker Compose

Git, GitHub Actions.

### Демо
Демо сервиса доступно по адресу: http://hackathon.rodial.pro/

### Среда запуска
развертывание сервиса производится на debian-like linux (debian 9+, ubuntu 18+)

требуется установленные пакеты node v14+, npm, yarn;

требуется установленные пакеты docker, docker-compose;

### Установка
```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install docker, docker-compose
sudo snap install node --classic
git clone git@github.com:eat-it-team/log-social-front.git
cd log-social-front
```

### Установка зависимостей проекта
```shell
yarn
```

### Запуск в режиме разработки
```
yarn dev
```
Фронт будет доступен по адресу http://localhost:3000/

### Запуск в production режиме
```
docker-compose up -d
```
Фронт будет доступен по адресу http://localhost/

### CI
GitHub Actions при изменениях в master.

### Разработчики

Родионов Алексей PHP https://t.me/rodial