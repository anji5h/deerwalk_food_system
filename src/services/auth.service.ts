import { InsertQuery, SelectQuery } from "../data-source";
import { User } from "../entity/User";
import { BadRequestError } from "../utils/errorHandler";
import { comparePassword, hashPassword } from "../utils/hash";
import { signToken } from "../utils/jwt";
import { loginValidator, signupValidator } from "../validator/auth.validator";

export const loginService = async (body: AUTH_REQ.ILoginRequest) => {
  let data = await loginValidator.validateAsync(body, {
    stripUnknown: true,
  });
  const user = await SelectQuery("user")
    .from(User, "user")
    .where("user.email = :email", { email: data.email })
    .innerJoin("user.org", "org")
    .select(["user", "org.id", "org.name", "org.credit"])
    .getOne();
  if (!user) throw new BadRequestError("Invalid email or password");
  console.table(user);
  const isValid = await comparePassword(data.password, user.password);
  if (!isValid) throw new BadRequestError("Invalid email or password");
  const token = await signToken({ id: user.id, orgId: user.org.id });
  return token;
};

export const signupService = async (body: AUTH_REQ.ISignupRequest) => {
  let data = await signupValidator.validateAsync(body, {
    abortEarly: true,
    stripUnknown: true,
  });
  const user = await SelectQuery("user")
    .from(User, "user")
    .where("user.email = :email", { email: data.email })
    .getOne();
  if (user) throw new BadRequestError("user already exists");
  data.password = await hashPassword(data.password);
  await InsertQuery.into(User)
    .values({ name: data.name, email: data.email, password: data.password, org: data.org_id })
    .execute();
};
