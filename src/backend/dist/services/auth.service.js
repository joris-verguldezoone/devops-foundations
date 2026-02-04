"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const db_1 = require("../db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SALT_ROUNDS = 10;
const signup = async (email, password) => {
    const hashedPassword = await bcrypt_1.default.hash(password, SALT_ROUNDS);
    const result = await db_1.pool.query("INSERT INTO users(email, password) VALUES($1, $2) RETURNING id, email", [email, hashedPassword]);
    return result.rows[0];
};
exports.signup = signup;
const login = async (email, password) => {
    const result = await db_1.pool.query("SELECT * FROM users WHERE email=$1", [email]);
    const user = result.rows[0];
    if (!user)
        throw new Error("Invalid credentials");
    const valid = await bcrypt_1.default.compare(password, user.password);
    if (!valid)
        throw new Error("Invalid credentials");
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
    return token;
};
exports.login = login;
