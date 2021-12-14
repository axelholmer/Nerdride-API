import jwt from "jsonwebtoken";

/**
 * Creates a mock JWT
 * @returns a JSON obj with JWT
 */
const sign = async () => {
  try {
    const secret: any = process.env.JWT_SECRET;
    const token = jwt.sign({ database: "nerdride" }, secret, {
      algorithm: "HS256",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ access_token: token }),
    };
  } catch (err) {
    console.log(err);
  }
};
console.log(sign());
