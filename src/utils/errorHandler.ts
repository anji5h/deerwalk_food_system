import { ValidationError } from "joi";
export default class ErrorHandler extends Error {
  constructor(message: string, public statusCode: number, public err?: any) {
    super(message);
    this.statusCode = statusCode;
    this.err = err;
  }
}
export class NotFoundError extends ErrorHandler {
  constructor(message: string, err?: any) {
    super(message, 404, err);
  }
}
export class BadRequestError extends ErrorHandler {
  constructor(message: string, err?: any) {
    super(message, 400, err);
  }
}
export class UnauthorizedError extends ErrorHandler {
  constructor(message: string, err?: any) {
    super(message, 401, err);
  }
}
export class ForbiddenError extends ErrorHandler {
  constructor(message: string, err?: any) {
    super(message, 403, err);
  }
}
export class InternalServerError extends ErrorHandler {
  constructor(message: string, err?: any) {
    super(message, 500, err);
  }
}

//pasrse joi error
function parseErrors(err: ValidationError) {
  const errors = err.details.map((error) => {
    return {
      message: error.message,
      path: error.path[0],
    };
  });
  return errors;
}
export class ValidateError extends ErrorHandler {
  constructor(err: ErrorHandler) {
    if (err instanceof ValidationError) {
      super("validation error", 400, parseErrors(err));
    } else super(err.message, err.statusCode, err.err);
  }
}
