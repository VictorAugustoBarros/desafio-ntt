export declare abstract class BaseDomainException extends Error {
    readonly code: string;
    constructor(code: string, message?: string);
}
