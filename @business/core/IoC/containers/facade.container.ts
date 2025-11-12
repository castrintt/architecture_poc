import type {Container} from "inversify";
import type {IDateFacade} from "@shared/facade/contracts/date.interface";
import {DateFacade} from "@shared/facade/date.facade";
import {FACADE_BIND_SYMBOL} from "@core/IoC/binds/facade.bind";


export function bindFacadeContainer(container: Container) {
    container.bind<IDateFacade>(FACADE_BIND_SYMBOL.DateFacade).to(DateFacade).inSingletonScope()
}