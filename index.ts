import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import express, { Express, Router } from "express";
import cors from "cors";
import path from "path";

/**
 * @method setup Setup Express App
 * @param app Express instance
 * @param staticDir object { dirname: string; publicDir: string }: dirname: current direct, publicDir: Folder name you want to set public folder
 * @param origin string: IP address or domain name of origin call api to your web server
 * @param config object: Configure cors for your web server
 * @param parser boolean: If true configure accept json, parse body and cookie to json object, ortherwise false
 */
export function setup(app: Express, staticDir: { dirname: string; publicDir: string }, origin: string, config: object | undefined = undefined, parser: boolean = true): void {
    // Setup Express app
    if (parser) {
        app.use(json());
        app.use(urlencoded({ extended: false }));
        app.use(cookieParser());
    }

    if (config === undefined)
        config = {
            origin: origin,
            allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Origin", "Accept"],
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE"],
            optionSuccessStatus: 200,
        };

    app.use(cors(config));

    // Set static folder to public folder
    app.use(express.static(path.join(staticDir.dirname, staticDir.publicDir)));
}

/**
 * @method route Set root route
 * @param app Express instance
 * @param path string: Path of root route
 * @param route Router instance
 */
export function route(app: Express, path: string, route: Router): void {
    app.use(path, route);
}
