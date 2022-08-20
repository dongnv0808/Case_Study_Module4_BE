// Xác minh token
import jwt from "jsonwebtoken";

export const SECRET_KEY = '257946';

export const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'You are anonymous1'
            });
        } else {
            jwt.verify(accessToken, SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous2'
                    });
                } else if(data.role === "client"){
                    req.decoded = data;
                    next();
                } else {
                    res.status(401).json({
                        message: 'You are anonymous2'
                    });
                }
            });
        }
    } else {
        res.status(401).json({
            message: 'You are anonymous3'
        });
    }
}