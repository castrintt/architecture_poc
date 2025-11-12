import type {Container} from "inversify";
import type {IUserRepository} from "@repository/contracts/user.interface";
import {UserRepository} from "@repository/user.repository";
import {REPOSITORY_BIND_SYMBOL} from "@core/IoC/binds/repository.bind";

export function bindRepositoryContainer(container: Container) {
    container.bind<IUserRepository>(REPOSITORY_BIND_SYMBOL.UserRepository).to(UserRepository).inSingletonScope()
}