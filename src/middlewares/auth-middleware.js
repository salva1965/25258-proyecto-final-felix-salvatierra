import jwt from "jsonwebtoken";
export const verificacion = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    jwt.verify(token, "Abcd", (err) => {
        if (err) return  res.status(401).json({ error: "Invalid token" });

    next();
})
};
