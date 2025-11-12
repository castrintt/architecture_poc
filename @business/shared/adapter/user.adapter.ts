import {inject, injectable} from "inversify";
import type {IUserAdapter} from "@shared/adapter/contracts/user.interface";
import type {IDateFacade} from "@shared/facade/contracts/date.interface";
import {FACADE_BIND_SYMBOL} from "@core/IoC/binds/facade.bind";

@injectable()
export class UserAdapter implements IUserAdapter {
    constructor(
        @inject(FACADE_BIND_SYMBOL.DateFacade)
        private readonly _date_facade: IDateFacade
    ) {
    }
}