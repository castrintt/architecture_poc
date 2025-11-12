type Actions = {
    logout:() => void
};

type States = {
    [key: string]: any
};

export type ControllerType = {
    controller: {
        actions: Actions;
        states: States
    }
};
