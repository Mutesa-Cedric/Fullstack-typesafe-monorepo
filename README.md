# FULLSTACK-TYPESAFE-MONOREPO


## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) app
- `web`: a [Next.js](https://nextjs.org) app
- `ui`: a stub React component library used by `web`.
- `config`: `eslint` and `tailwind` (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Node Package Scripts](https://github.com/sezna/nps#readme) for automation scripts
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup
This starter kit is using turborepo and yarn workspaces for monorepo workflow.

### Prerequisites 
- Install nps by running 
```
npm i -g nps
```
### Install Dependencies
Make sure you are at root of the project and just run 

```
nps prepare
```

### Build

To build all apps and packages, run the following command at the root of project:

```
nps build
```

### Develop

To develop all apps and packages, run the following command at the root of project:

```
nps dev
```
The app should be running at `http://localhost` with reverse proxy configured.

For running only a specific app, run the following command at the root of project:

```
nps dev.<app-name>
```

example: `nps dev.api` will run only the api app.


for more details on how to use turborepo, please refer to [turborepo](https://turbo.build/repo)


## Other available commands
Run `nps` in the terminal to see list of all available commands. 
