// Xác minh token
import jwt from "jsonwebtoken";

export const SECRET_KEY = '257946';

export const Auth = (req, res, next) => {
    let authorization = req.header.authorization;
    if (!authorization) {
        res.status(401).json({
            message: 'bạn không xác định!'
        });
    }else {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'bạn không xác định!'
            });
        }else {
            jwt.verify(accessToken, SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        message: 'bạn không xác định!'
                    });
                }else {
                    req.decode = data;
                    next();
                }
            })
        }
    }
}