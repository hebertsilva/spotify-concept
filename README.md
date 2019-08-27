# Spotify concept

Simple project to test the Spotify API, along with React, NodeJS, Redis.

## Setup projetct

### Install dependencies for project

```shell
npm install
```

Is required to [Redis](https://redis.io/)

```shell
brew install redis
```

### Config to project environment

Create file `.env` with environments variables
```shell
SPOTIFY_CLIENT_ID=<token_client_id>
SPOTIFY_CLIENT_SECRET=<token_client_secret>
SESSION_SECRET=<token_session_secret>
REDIRECT_URI=http://localhost:3000/me/authorize
PROXY_URL=http://localhost:3001/
```

### Execute to project

Execute Redis in new tab

```shell
redis-server
```

```sehll
npm run start
```


### build to project
```shell
npm run buid
```

### for testing
```shell
npm run lint
```

```shell
npm run test
```