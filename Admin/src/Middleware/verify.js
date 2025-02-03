/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ success: false, msg: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ success: false, msg: "Failed to authenticate token" });
        }
        req.adminId = decoded.admin.id;
        next();
    });
};

export default verifyToken;
