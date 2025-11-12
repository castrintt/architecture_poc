import {containerIoC} from "@core/IoC/IoC.container";

export function useInjection<T>(type: symbol): T {
    return containerIoC.get<T>(type);
}