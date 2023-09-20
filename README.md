# REST server with Express and MongoDB

Here is a basic implementation of a REST API with a local mondo db database dockerized.

How to run:

1. Install dependencies

```bash
$ pnpm install
```

2. Build docker container

```
$ docker compose up -d
```

3. Execute seed, send a **POST** request to the following endpoint:

```bash
$ localhost:3001/seed
```

4. Run server

```bash
$ pnpm run start:dev
```
