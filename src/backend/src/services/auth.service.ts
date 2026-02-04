import { pool } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/user";

const SALT_ROUNDS = 10;

export const signup = async (email: string, password: string): Promise<Omit<User, "password">> => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const result = await pool.query(
    "INSERT INTO users(email, password) VALUES($1, $2) RETURNING id, email",
    [email, hashedPassword]
  );
  return result.rows[0];
};

export const login = async (email: string, password: string): Promise<string> => {
  const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  const user = result.rows[0];

  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1h" }
  );

  return token;
};
