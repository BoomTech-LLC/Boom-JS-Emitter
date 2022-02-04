import Event from "./Event"

export default class Emitter {
    constructor() {
        this.events = {}
    }

    emit(name, ...args) {
        this.events[name].callbacks.forEach((callback) => {
            callback(...args)
        });
    }

    subscribe(name, callback) {
        if (this.events[name]) this.events[name].registerCallback(callback)
        else {
            this.events[name] = new Event(name)
            this.events[name].registerCallback(callback)
        }
    }

    unsubscribe(name) {
        delete this.events[name]
    }
}