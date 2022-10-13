"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const { sum, sub } = require('./index');
(0, globals_1.test)('test sum', () => {
    (0, globals_1.expect)(sum(1, 1)).toBe(2);
});
(0, globals_1.test)('test sub', () => {
    (0, globals_1.expect)(sub(5, 4)).toBe(1);
});
