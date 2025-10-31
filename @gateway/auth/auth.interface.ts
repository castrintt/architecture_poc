import {GenerateAccessTokenResponse} from "@domain/models/auth/generateAccessTokenResponse";


export interface IAuthGateway {
    generateTokenAsync(login: string, password: string): Promise<GenerateAccessTokenResponse | null>
}