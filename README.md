[![Build Status](https://travis-ci.com/nurikk/sls-frontend.svg?branch=master)](https://travis-ci.com/nurikk/z2m-frontend)
[![CodeFactor](https://www.codefactor.io/repository/github/nurikk/z2m-frontend/badge/master)](https://www.codefactor.io/repository/github/nurikk/z2m-frontend/overview/master)
[![codebeat badge](https://codebeat.co/badges/f71685ee-16e0-4ac5-b016-23b6a9888aa6)](https://codebeat.co/projects/github-com-nurikk-z2m-frontend-master)

# Demo
[Demo](https://nurikk.github.io/z2m-frontend/)

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

# Screenshots
![](images/screenshot_home.png)
![](images/screenshot_map.png)

