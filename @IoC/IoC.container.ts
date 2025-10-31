import {IIoCContainer} from "./IoC.interface";
import {TokenRepository} from "@repository/token/token.repository";
import {DateFacade} from "@facade/date/date.facade";
import {ILogoutService} from "@service/logout/logout.interface";
import {LogoutService} from "@service/logout/logout.service";
import {IAuthService} from "@service/auth/auth.interface";
import {AuthService} from "@service/auth/auth.service";
import {AuthGateway} from "@gateway/auth/auth.gateway";
import {IAuthGateway} from "@gateway/auth/auth.interface";
import {ITokenRepository} from "@repository/token/token.interface";
import {IDateFacade} from "@facade/date/date.interface";

export class IoCContainer implements IIoCContainer {
    private static instance?: IIoCContainer;

    private _logoutService?: ILogoutService;
    private _authService?: IAuthService;

    private _tokenRepository?: ITokenRepository;

    private _authGateway?: IAuthGateway;

    private _dateFacade?: IDateFacade;

    private constructor() {}

    static getInstance = (): IIoCContainer => {
        if (!IoCContainer.instance) IoCContainer.instance = new IoCContainer();
        return IoCContainer.instance;
    }

    getLogoutService = (): ILogoutService => {
        if (!this._logoutService) this._logoutService = new LogoutService(this.getTokenRepository());
        return this._logoutService;
    }


    getAuthService = (): IAuthService => {
        if (!this._authService) this._authService = new AuthService(this.getAuthGateway());
        return this._authService;
    }


    getTokenRepository = (): ITokenRepository => {
        if (!this._tokenRepository) this._tokenRepository = new TokenRepository();
        return this._tokenRepository;
    }

    getAuthGateway = (): IAuthGateway => {
        if (!this._authGateway) this._authGateway = new AuthGateway();
        return this._authGateway;
    }


    getDateFacade = (): IDateFacade => {
        if (!this._dateFacade) this._dateFacade = new DateFacade();
        return this._dateFacade;
    }


}