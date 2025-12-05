import jwt from "jsonwebtoken";
export const login = (req, res) => {
    const {email, password} = req.body;

    if(email == "x@x.com" && password == "1234!") {
        const token = jwt.sign({email},"Abcd", {expiresIn: "2 days"});

        return res.json({token});
    }
    res.status(401).json({error: "Invalid credentials"});
};