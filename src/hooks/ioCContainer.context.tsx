import React, {createContext, ReactNode, useContext} from 'react';
import {IIoCContainer} from "@IoC/IoC.interface";
import {IoCContainer} from "@IoC/IoC.container";


const IoCContext = createContext<IIoCContainer | null>(null);

interface IoCProviderProps {
    children: ReactNode;
    container?: IIoCContainer;
}

export const IoCProvider: React.FC<IoCProviderProps> = ({
    children,
    container
}) => {
    const services = container || IoCContainer.getInstance();

    return (
        <IoCContext.Provider value={services}>
            {children}
        </IoCContext.Provider>
    );
};

export const useIoCContainer = (): IIoCContainer => {
    const context = useContext(IoCContext);
    if (!context) throw new Error('useIoCContainer must be used within IoCProvider');
    return context;
};