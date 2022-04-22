import { userModel } from "../../dataSource";
import { BadRequestError } from "../../utils/errorHandler";
import { comparePassword } from "../../utils/hash";
import { createAuthToken } from "../../utils/jwt";
import { loginValidator } from "../../validator/auth.validator";

export const loginService = async (body: AUTH_REQ.ILoginRequest) => {
  let data = await loginValidator.validateAsync(body, {
    stripUnknown: true,
    abortEarly: false,
  });
  const user = await userModel.findUnique({
    where: {
      email: data.email,
    },
    include: {
      org: {
        select: {
          id: true,
        },
      },
    },
  });
  if (!user) throw new BadRequestError("Invalid email or password");
  const isValid = await comparePassword(data.password, user.password);
  if (!isValid) throw new BadRequestError("Invalid email or password");
  const { refreshToken, accessToken, expires_in } = await createAuthToken({
    id: user.id,
    role: user.role,
    org_id: user.org.id,
  });
  return {
    refresh_token: refreshToken,
    token_type: "Bearer",
    access_token: accessToken,
    expires_in: expires_in,
  };
};
