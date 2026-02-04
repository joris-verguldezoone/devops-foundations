import * as authService from "../services/auth.service";
export const signup = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: "Missing fields" });
    try {
        const user = await authService.signup(email, password);
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: "Missing fields" });
    try {
        const token = await authService.login(email, password);
        res.json({ token });
    }
    catch (err) {
        console.error(err);
        res.status(401).json({ error: err.message || "Invalid credentials" });
    }
};
