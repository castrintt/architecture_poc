import {JWT_DECODE_TOKEN} from "../../@domain/models/jwt/jwt.decode";

export interface ITokenRepository {

    decode(): Promise<JWT_DECODE_TOKEN | null>

    getAccessToken(): Promise<string | null>

    setAccessToken(token: string): Promise<void>

    deleteAccessToken(): Promise<void>

    getRefreshToken(): Promise<string | null>

    setRefreshToken(token: string): Promise<void>

    deleteRefreshToken(): Promise<void>

    getExpiration(): Promise<string | null>

    setExpiration(expiration: Date): Promise<void>

    deleteExpiration(): Promise<void>

    hasTokenExpired(): Promise<boolean>

    getAuthenticated(): Promise<string | null>

    setAuthenticated(authenticated: string): Promise<void>

    deleteAuthenticated(): Promise<void>
}