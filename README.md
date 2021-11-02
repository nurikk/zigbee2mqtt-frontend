[![Node.js CI](https://github.com/nurikk/zigbee2mqtt-frontend/actions/workflows/node.js.yml/badge.svg)](https://github.com/nurikk/zigbee2mqtt-frontend/actions/workflows/node.js.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/nurikk/zigbee2mqtt-frontend/badge/master)](https://www.codefactor.io/repository/github/nurikk/zigbee2mqtt-frontend/overview/master)
[![codebeat badge](https://codebeat.co/badges/f71685ee-16e0-4ac5-b016-23b6a9888aa6)](https://codebeat.co/projects/github-com-nurikk-z2m-frontend-master)

# Screenshots

![](images/screenshot_home.png)
![](images/screenshot_map.png)

# Develop

Install dependencies

```bash
npm install
````

Develop using mock data

```bash
npm run start
open http://localhost:3030/
````

Develop using your z2m instance

```bash
Z2M_API_URI="ws://192.168.1.200:8080" npm run start
open http://localhost:3030/
```

# Build

```bash
npm install
npm run build //compiled files at ./dist
```

# Sponsors

[JetHome](http://jethome.ru/)


