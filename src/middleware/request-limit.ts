import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 10000, // 10 seconds
  max: 5, // Limit each IP to 5 requests per windowMs
  message: "You can't make any more requests at the moment. Try again later",
});

export default limiter;
