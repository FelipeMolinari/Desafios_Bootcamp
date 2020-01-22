import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../../config/authconfig";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return req.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secretKey);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return req.status(401).json({ error: "Invalid token" });
  }
};
