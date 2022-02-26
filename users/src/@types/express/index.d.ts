declare namespace Express {
    export interface Request {
        userId?: string | undefined,
        name?: string | undefined,
        email?: string | undefined
    }
}