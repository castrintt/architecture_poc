type Actions = {
    [key: string]: any
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
