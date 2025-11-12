import {inject, injectable} from "inversify";
import type {IUserService} from "@application/contracts/user.interface";
import type {UserGateway} from "@api/gateway/user.gateway";
import type {IUserAdapter} from "@shared/adapter/contracts/user.interface";
import type {IUserRepository} from "@repository/contracts/user.interface";
import {GATEWAY_BIND_SYMBOL} from "@core/IoC/binds/gateway.bind";
import {ADAPTER_BIND_SYMBOL} from "@core/IoC/binds/adapter.bind";
import {REPOSITORY_BIND_SYMBOL} from "@core/IoC/binds/repository.bind";

@injectable()
export class UserService implements IUserService {
    constructor(
        @inject(GATEWAY_BIND_SYMBOL.UserGateway)
        private readonly _user_gateway: UserGateway,
        @inject(ADAPTER_BIND_SYMBOL.UserAdapter)
        private readonly _user_adapter: IUserAdapter,
        @inject(REPOSITORY_BIND_SYMBOL.UserRepository)
        private readonly _user_repository: IUserRepository,
    ) {}
}