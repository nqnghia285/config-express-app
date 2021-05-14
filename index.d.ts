import { CorsOptions } from "cors";
import { Express, Router } from "express";

/**
 * @method setup Setup Express App
 * @param app Express instance
 * @param staticDir object { dirname: string; publicDir: string }: dirname: current direct, publicDir: Folder name you want to set public folder
 * @param origin string: IP address or domain name of origin call api to your web server
 * @param config CorsOptions: Configure cors for your web server
 * @param parser boolean: If true configure accept json, parse body and cookie to json object, ortherwise false
 */
export declare function setup(app: Express, staticDir: { dirname: string; publicDir: string }, origin: string, config: CorsOptions | undefined, parser: boolean): void;

/**
 * @method route Set root route
 * @param app Express instance
 * @param path string: Path of root route
 * @param route Router instance
 */
export declare function route(app: Express, path: string, route: Router): void;
