import {SecureStore} from "@libs/storage/imports";
import {JWT_DECODE_TOKEN} from "../../@domain/models/jwt/jwt.decode";
import {ITokenRepository} from "./token.interface";
import {STORE_KEYS} from "@utils/STORE_KEYS";
import {jwtDecode} from "jwt-decode";

export class TokenRepository implements ITokenRepository {
    private cachedToken: string | null = null;

    public async hasTokenExpired(): Promise<boolean> {
        const secureStoreDate = await this.getExpiration()
        const expiryTime = new Date(secureStoreDate || '');
        const now = new Date();
        const thirtySecondsMarginOfError = 30 * 1000;
        return now.getTime() >= expiryTime.getTime() - thirtySecondsMarginOfError;
    }

    public async getAccessToken(): Promise<string | null> {
        if (this.cachedToken) return this.cachedToken
        const accessToken = await SecureStore.GET_ASYNC(STORE_KEYS.TOKEN.ACCESS_TOKEN)
        this.cachedToken = accessToken
        return accessToken
    }

    async decode(): Promise<JWT_DECODE_TOKEN | null> {
        const token = await this.getAccessToken()
        if (!token) return null
        try {
            return jwtDecode<JWT_DECODE_TOKEN>(token);
        } catch (_) {
            return null;
        }
    }

    public async setAccessToken(token: string): Promise<void> {
        return await SecureStore.SET_ASYNC(STORE_KEYS.TOKEN.ACCESS_TOKEN, token)
    }

    public async deleteAccessToken(): Promise<void> {
        this.cachedToken = null;
        return await SecureStore.DELETE_ASYNC(STORE_KEYS.TOKEN.ACCESS_TOKEN)
    }

    public async getRefreshToken(): Promise<string | null> {
        return await SecureStore.GET_ASYNC(STORE_KEYS.TOKEN.REFRESH_TOKEN)
    }

    public async setRefreshToken(token: string): Promise<void> {
        return await SecureStore.SET_ASYNC(STORE_KEYS.TOKEN.REFRESH_TOKEN, token)
    }

    public async deleteRefreshToken(): Promise<void> {
        return await SecureStore.DELETE_ASYNC(STORE_KEYS.TOKEN.REFRESH_TOKEN)
    }

    public async getExpiration(): Promise<string | null> {
        return await SecureStore.GET_ASYNC(STORE_KEYS.TOKEN.EXPIRATION)
    }

    public async setExpiration(expiration: Date): Promise<void> {
        return await SecureStore.SET_ASYNC(STORE_KEYS.TOKEN.EXPIRATION, expiration)
    }

    public async deleteExpiration(): Promise<void> {
        return await SecureStore.DELETE_ASYNC(STORE_KEYS.TOKEN.EXPIRATION)
    }

    public async getAuthenticated(): Promise<string | null> {
        return await SecureStore.GET_ASYNC(STORE_KEYS.TOKEN.AUTHENTICATED)
    }

    public async setAuthenticated(authenticated: string): Promise<void> {
        return await SecureStore.SET_ASYNC(STORE_KEYS.TOKEN.AUTHENTICATED, authenticated)
    }

    public async deleteAuthenticated(): Promise<void> {
        return await SecureStore.DELETE_ASYNC(STORE_KEYS.TOKEN.AUTHENTICATED)
    }

}