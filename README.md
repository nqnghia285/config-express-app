# Config Express App [![Build Status](https://github.com/Links2004/arduinoWebSockets/workflows/CI/badge.svg?branch=master)](https://github.com/nqnghia285/config-express-app.git)

Config Express App help us setup basic express app

### Functions:

```typescript
/**
 * @method setup Setup Express App
 * @param app Express instance
 * @param staticDir object { dirname: string; publicDir: string }: dirname: current direct, publicDir: Folder name you want to set public folder
 * @param origin string: IP address or domain name of origin call api to your web server
 * @param config object: Configure cors for your web server
 * @param parser boolean: If true configure accept json, parse body and cookie to json object, ortherwise false
 */
function setup(app: Express, staticDir: { dirname: string; publicDir: string }, origin: string, config: object | undefined = undefined, parser: boolean = true): void;
```

```typescript
/**
 * @method route Set root route
 * @param app Express instance
 * @param path string: Path of root route
 * @param route Router instance
 */
function route(app: Express, path: string, route: Router): void;
```

### Example:

```typescript
    // ES6
    import express from "express";
    import RootRoute from "/your-root-route";
    const app = express();
    const ORIGIN = process.env.ORIGIN;

    const staticDir = { dirname: __dirname, publicDir: "public" };

    // Setup Express app
    setup(app, staticDir, ORIGIN); // config and parser are default setup

    // Set root route
    route(app, "/api", RootRoute);
    .....
```
