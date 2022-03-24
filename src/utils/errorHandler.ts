export default class ErrorHandler extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
export class NotFoundError extends ErrorHandler {
  constructor(message: string) {
    super(message, 404);
  }
}
export class BadRequestError extends ErrorHandler {
  constructor(message: string) {
    super(message, 400);
  }
}
export class UnauthorizedError extends ErrorHandler {
  constructor(message: string) {
    super(message, 401);
  }
}
export class ForbiddenError extends ErrorHandler {
  constructor(message: string) {
    super(message, 403);
  }
}
export class InternalServerError extends ErrorHandler {
  constructor(message: string) {
    super(message, 500);
  }
}
