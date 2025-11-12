import "reflect-metadata"
import {Container} from "inversify";
import {bindRepositoryContainer} from "@core/IoC/containers/repository.container";
import {bindAdapterContainer} from "@core/IoC/containers/adapter.container";
import {bindFacadeContainer} from "@core/IoC/containers/facade.container";
import {bindServiceContainer} from "@core/IoC/containers/service.container";
import {bindGatewayContainer} from "@core/IoC/containers/gateway.container";

const containerIoC = new Container({
    autobind: true,
    defaultScope: 'Singleton'
})

bindRepositoryContainer(containerIoC)
bindAdapterContainer(containerIoC)
bindFacadeContainer(containerIoC)
bindServiceContainer(containerIoC)
bindGatewayContainer(containerIoC)

export {containerIoC}