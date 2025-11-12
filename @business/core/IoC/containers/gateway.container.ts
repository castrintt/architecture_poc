import type {Container} from "inversify";
import type {IUserGateway} from "@api/contracts/user.interface";
import {UserGateway} from "@api/gateway/user.gateway";
import {GATEWAY_BIND_SYMBOL} from "@core/IoC/binds/gateway.bind";


export function bindGatewayContainer(container: Container) {
    container.bind<IUserGateway>(GATEWAY_BIND_SYMBOL.UserGateway).to(UserGateway).inSingletonScope()
}