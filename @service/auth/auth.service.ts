import {IAuthService} from "./auth.interface";
import {IAuthGateway} from "@gateway/auth/auth.interface";


export class AuthService implements IAuthService {
    private readonly _auth_gateway: IAuthGateway

    constructor(authGateway: IAuthGateway) {
        this._auth_gateway = authGateway
    }

    public async generateTokenAsync(login: string, password: string): Promise<boolean> {
        const auth = await this._auth_gateway.generateTokenAsync(login, password);
        return !!auth;
    }
}