import { Express, Router } from "express";

/**
 * @method setup
 * @param app
 * @param dirname
 * @param origin
 */
export declare function setup(app: Express, dirname: string, origin: string): void;

/**
 * @method route
 * @param app
 * @param path
 * @param route
 */
export declare function route(app: Express, path: string, route: Router): void;
