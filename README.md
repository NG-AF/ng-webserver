<br/>
<p align="center">
  <h3 align="center">NG-WebServer</h3>

  <p align="center">
    NG Plane data visualisation server
    <br/>
    <br/>
    <a href="https://github.com/NG-AF/ng-webserver"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/NG-AF/ng-webserver/issues">Report Bug</a>
    .
    <a href="https://github.com/NG-AF/ng-webserver/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/NG-AF/ng-webserver?color=dark-green) ![Issues](https://img.shields.io/github/issues/NG-AF/ng-webserver) ![License](https://img.shields.io/badge/license-MPL2.0-blue)


## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)

## About The Project

This repo is used for NG's data logging and visualisation on ground station. We use web servers to visualize data quickly and without a need of a program.

## Built With



* [Express](https://expressjs.com/)
* [React](https://react.dev)
* [Socket.io](https://socket.io/)
* [Cors](https://www.npmjs.com/package/cors)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites


- nodejs
- npm

```bash
pacman -S nodejs npm
```

### Installation

1. Clone the repo

```bash
git clone https://github.com/NG-AF/ng-webserver.git
```

2. Install nodejs dependencies
```bash
cd client/ && npm i && cd ..
cd server/ && npm i && cd ..
```


## Usage

1. Run the server
```bash
cd server/ && npm run dev
```

2. Run the client
```bash
cd client/ && npm run start
```

## Roadmap

See the [open issues](https://github.com/NG-AF/ng-webserver/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/NG-AF/ng-webserver/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
  
### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Mozilla Public License. See [LICENSE](./LICENSE.md) for more information.

## Authors

* **Hakan Kayra Doğan** - *ISE Student* - [Hakan Kayra Doğan](https://github.com/hkayrad) - *Current developer*
