# 0x03. ES6 data manipulation
`JavaScript` `ES6`

![Arrays](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240429%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240429T204725Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=00159f5b74a5033cf01b285f499fa7e445ad69b3b5cc045b81771f41ec630f5d)

## Resources
### Read or watch:

* [Array](https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ)
* [Typed Array](https://intranet.alxswe.com/rltoken/YZ5RtzAPTaWtF00MYbXuVw)
* [Set Data Structure](https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg)
* [Map Data Structure](https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw)
* [WeakMap](https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdgi)

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/vFyWo9TJ_4ypOC6uPi2low), without the help of Google:

* How to use map, filter and reduce on arrays
* Typed arrays
* The Set, Map, and Weak link data structures


![Backendimage](https://camo.githubusercontent.com/dbfe34e5b2e54e879ded6b7b803a74fcf5ba51ec8ab6ac0481e59b7c7cb82597/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578655863334d485a315a444235634445785a545671643355355a585a78617a6b3364484e6e5a4756785a445a754d6e68684d6d6c3259795a6c634431324d56396e61575a7a58334e6c59584a6a61435a6a6444316e2f516e37346f5079614b5942705657644137742f3230302e77656270)

## Resources
### Read or watch:

* [Classes](https://intranet.alxswe.com/rltoken/ke2dSL31JbpAUBW0qWE9WA)
* [Metaprogramming](https://intranet.alxswe.com/rltoken/6OgF5QGbYclp_cwATfq-0g)


## Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* Your code will be tested using `Jest` and the command `npm run test`
* Your code will be verified against lint using ESLint
* All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```
## Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and `run npm install`.

Configuration Files
Add the files below to your project directory

`package.json`
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```
