const fireCustomEvent = (self, eventName, eventPayload) => {
    self.dispatchEvent(new CustomEvent(
        eventName, {
            composed: true,
            bubbles: true,
            detail: eventPayload
        }));
}

export {fireCustomEvent}