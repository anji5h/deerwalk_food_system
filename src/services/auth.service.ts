import { InsertQuery, SelectQuery } from "../data-source";
import { User } from "../entity/User";
import { BadRequestError } from "../utils/errorHandler";
import { loginValidator, signupValidator } from "../validator/auth.validator";

export const loginService = async (body: ILoginRequest) => {
  let data = await loginValidator.validateAsync(body, {
    stripUnknown: true,
  });
};

export const signupService = async (body: ISignupRequest) => {
  let data = await signupValidator.validateAsync(body, {
    abortEarly: true,
    stripUnknown: true,
  });
  const user = await SelectQuery.from(User, "user")
    .where("user.email = :email", { email: data.email })
    .getOne();
  if (user) throw new BadRequestError("user already exists");
  await InsertQuery.into(User).values(data).execute();
};
