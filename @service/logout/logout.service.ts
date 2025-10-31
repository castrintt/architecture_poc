import {ILogoutService} from "./logout.interface";
import store from "@store/store";
import {authUser} from "@store/slices/authSlice/reducer";
import {axios_instances} from "@libs/axios/axios.instances";
import {ITokenRepository} from "@repository/token/token.interface";


export class LogoutService implements ILogoutService {
    private readonly _token_repository: ITokenRepository

    constructor(tokenRepository: ITokenRepository) {
        this._token_repository = tokenRepository
    }

    public async logout(): Promise<void> {
        store.dispatch(authUser(false))
        axios_instances.PRIVATE.defaults.headers.common.Authorization = "";
        await Promise.all([
            this._token_repository.deleteAccessToken(),
            this._token_repository.deleteRefreshToken(),
            this._token_repository.deleteExpiration(),
        ])
    }


}