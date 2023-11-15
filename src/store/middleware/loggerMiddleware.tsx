export const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    //middleware signature i.e. code of middleware
    if (!action.type) { //sometimes may happen in redux thunk that there is no action, so e just pass it to next action
        return next(action);
    }

    next(action); // This is synchronous & fires action & reducers update then get next state
}
