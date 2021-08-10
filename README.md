## ✋🏻 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

Clone the repository, and install the dependencies by running the following commands:

```sh
  $ git clone https://github.com/JoseMarshall/virtual-wallet-test
```

Access the project on `virtual-wallet-test` directory:

```sh
  $ cd virtual-wallet-test
```

Access the `develop` branch:

```sh
 $ git checkout develop
```

pull all `develop` changes:

```sh
 $ git pull origin develop
```

then install all dependencies :

```sh
 $ npm install
```

## Running the application

Access the project folder and run the following command:

```bash
npm run dev
```

Open [http://localhost:3333/api](http://localhost:3333/api) on your browser to see the result.

To run the tests, type the following command in the terminal:

```sh
npm run test
```

## How to make a Commit

To make a commit must be used a following rule:

`git commit -m "*type*: commit-message"`

- Where type is: [ `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test` ]
- And commit-message must be written in lower-case.
  - e.g - `git commit -m "feat: set up eslint"`

## How to Contribute

- Fetch/Pull the Develop Branch
- Create a Branch based on your issue name
  - e.g - Branch name is task/(name)
  - e.g - Branch name is bug/(name)
- Once done push your branch to origin and submit a PR to the Develop branch for review
  - e.g - `git push origin task/(name)`
