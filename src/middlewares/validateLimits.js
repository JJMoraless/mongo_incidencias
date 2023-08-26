import rateLimit from "express-rate-limit";

export const validateLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});
