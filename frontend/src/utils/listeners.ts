export function listenerOn(obj: object, type: keyof DocumentEventMap, listener: EventListenerOrEventListenerObject,  ...rest:any[]): any {
    if ("addEventListener" in obj) {
        (obj as EventTarget).addEventListener(type, listener, ...rest)
    }
}


export function listenerOff(obj: object, type: keyof DocumentEventMap, listener: EventListenerOrEventListenerObject,  ...rest:any[]): any {
    if ("addEventListener" in obj) {
        (obj as EventTarget).removeEventListener(type, listener, ...rest)
    }
}