import type {Container} from "inversify";
import type {IUserService} from "@application/contracts/user.interface";
import {UserService} from "@application/service/user.service";
import {SERVICES_BIND_SYMBOL} from "@core/IoC/binds/service.bind";

export function bindServiceContainer(container: Container) {
    container.bind<IUserService>(SERVICES_BIND_SYMBOL.UserService).to(UserService).inSingletonScope()
}