import {IAuthService} from "./auth.interface";
import {IAuthGateway} from "@gateway/auth/auth.interface";
import store from "@store/store";
import {authUser} from "@store/slices/authSlice/reducer";


export class AuthService implements IAuthService {
    private readonly _auth_gateway: IAuthGateway

    constructor(authGateway: IAuthGateway) {
        this._auth_gateway = authGateway
    }

    public async generateTokenAsync(login: string, password: string): Promise<boolean> {
        // const auth = await this._auth_gateway.generateTokenAsync(login, password);
        // return !!auth;
        store.dispatch(authUser(true))
        return true;
    }

}