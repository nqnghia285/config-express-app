import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import express, { Express, Router } from "express";
import cors from "cors";
import path from "path";

/**
 * @method setup
 * @param app
 * @param dirname
 * @param origin
 */
export function setup(app: Express, dirname: string, origin: string): void {
    // Setup Express app
    app.use(json());
    app.use(urlencoded({ extended: false }));
    app.use(cookieParser());

    const config = {
        origin: origin,
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Origin", "Accept"],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
        optionSuccessStatus: 200,
    };
    app.use(cors(config));

    // Set static folder to public folder
    app.use(express.static(path.join(dirname, "public")));
}

/**
 * @method route
 * @param app
 * @param path
 * @param route
 */
export function route(app: Express, path: string, route: Router): void {
    app.use(path, route);
}
