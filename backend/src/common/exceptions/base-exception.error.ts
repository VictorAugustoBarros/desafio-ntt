export abstract class BaseDomainException extends Error {
  public readonly code: string;

  constructor(code: string, message: string = '') {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}
