import {ILogoutService} from "@service/logout/logout.interface";
import {IAuthService} from "@service/auth/auth.interface";
import {ITokenRepository} from "@repository/token/token.interface";
import {IAuthGateway} from "@gateway/auth/auth.interface";
import {IDateFacade} from "@facade/date/date.interface";

export interface IIoCContainer {
    getAuthService(): IAuthService;

    getLogoutService(): ILogoutService;

    getTokenRepository(): ITokenRepository;

    getAuthGateway(): IAuthGateway;

    getDateFacade():IDateFacade;
}