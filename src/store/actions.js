const Actions = Object.freeze({
    INC: Symbol("increment"),
    ADD: Symbol("add"),
    DEC: Symbol("decrement"),
    SUB: Symbol("subtraction"),
    DEL: Symbol("delete"),
    STORE: Symbol("store")
});

export default Actions;