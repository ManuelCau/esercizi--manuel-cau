import "dotenv/config";
import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./db.js";

const { SECRET } = process.env;

if (!SECRET) {
  throw new Error("JWT secret not defined in environment variables.");
}

interface JwtPayload {
  id: string;
}

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        const user = await db.one(
          `SELECT * FROM users WHERE id=$1`,
          payload.id
        );

        return user ? done(null, user) : done(new Error("User not found."));
      } catch (error) {
        done(error);
      }
    }
  )
);