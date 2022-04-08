#!/usr/bin/env node

import fetch from "node-fetch";
import path from "path";
import fs from "fs";
import argsParser from "args-parser";

/**
 * @typedef InitializerOptions
 * @property {string} type 操作類型 [init, add, append,...]
 * @property {string} lang 語言 [js, php, python,...]
 * @property {number} [p] 根據題目編號 (前端看到的編號)
 * @property {number} [s] 根據題目 slug （網址會看到全小寫的標題，但把空格改連接號）
 */

/** @type {InitializerOptions} */
const args = argsParser(process.argv);

console.log(args);