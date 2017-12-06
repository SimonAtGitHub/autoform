let eventBusClass = null;


export default function (Vue) {


    if (eventBusClass === null) {
        eventBusClass = Vue;
    }
    return new  eventBusClass();
};