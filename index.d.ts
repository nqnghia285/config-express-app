/// <reference path="./index.ts" />
/// <reference types="body-parser" />
/// <reference types="cookie-parser" />
/// <reference types="cors" />
/// <reference types="express" />

import { Express, Router } from "express";

/**
 * @method setup
 * @param app
 * @param dirname
 * @param origin
 */
export function setup(app: Express, dirname: string, origin: string): void;

/**
 * @method route
 * @param app
 * @param path
 * @param route
 */
export function route(app: Express, path: string, route: Router): void;