import { Strategy } from "passport-local";
import db from "../../../db/config.js";
import { compare } from "bcrypt";
const User = db.collection("users");

const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false);
      }

      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        return done(null, false);
      }

      delete user.password;

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default localStrategy;
