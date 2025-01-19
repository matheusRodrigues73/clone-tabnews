export class InternalServerError extends Error {
  constructor({ cause }) {
    super("Something is not working at server side", { cause });
    this.name = "InternalServerError";
    this.action = "Report the issue with our support";
    this.statusCode = 500;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
