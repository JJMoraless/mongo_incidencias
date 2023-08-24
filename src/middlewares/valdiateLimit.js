import rateLimit from "express-rate-limit";

export const limitQuerys = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});
