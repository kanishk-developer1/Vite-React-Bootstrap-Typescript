export interface CookieInterface {
    path: string,
    domain?: string,
    expiryDays: number,
    secure?: string,
    samesite: string
}