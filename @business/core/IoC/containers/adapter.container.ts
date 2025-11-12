import type {Container} from "inversify";
import type {IUserAdapter} from "@shared/adapter/contracts/user.interface";
import {UserAdapter} from "@shared/adapter/user.adapter";
import {ADAPTER_BIND_SYMBOL} from "@core/IoC/binds/adapter.bind";


export function bindAdapterContainer(container: Container) {
    container.bind<IUserAdapter>(ADAPTER_BIND_SYMBOL.UserAdapter).to(UserAdapter).inSingletonScope()
}