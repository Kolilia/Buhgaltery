module.exports = (req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, PATCH");
  res.append(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept"
  );

  next();
};
