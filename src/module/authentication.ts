import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export class Authentication {
  /**
   * Middleware to verify if the given JWT is valid and a route can be accessed
   * - If JWT is missing - Return 403
   * - If Token is invalid - Return 401
   */
  public static async verifyAccess(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const token = req.get("Authorization")?.split(" ")[1];
    const secret: any = process.env.JWT_SECRET;

    // Check if the authorization header exists
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    // Verifies token
    const decoded: any = jwt.verify(token, secret);

    // Verify the token. Returns the jwt object if valid - else null
    if (decoded && decoded.database == "nerdride") {
      next();
    } else {
      return res.status(401).send({ status: "unauthorized" });
    }
  }
}
