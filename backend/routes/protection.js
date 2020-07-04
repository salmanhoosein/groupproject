const JSONwebToken = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //check if header exists
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.json({ error: "Not Authenticated Header Not Present" });
  }

  //grab header from authorization header
  const token = authHeader.split("Bearer ")[1];
  //decode and verify token
  let decodedToken;
  try {
    //see if token and secret match
    decodedToken = JSONwebToken.verify(token, "AuthSecretToken");
  } catch (err) {
    return res.json({ error: "Not Authenticated Secret Doesn't Match" });
  }

  //check if token is verified
  if (!decodedToken) {
    return res.json({ error: "Not Authenticated Token Not Verified" });
  }

  next();
};
