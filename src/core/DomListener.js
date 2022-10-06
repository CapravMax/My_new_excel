import {capitalize} from '../core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('Np $root provided for DomListener!!');
        }
        this.$root = $root;
        this.listeners = listeners;
    }
    initDOMListeners () {
        console.log(this.listeners);
        this.listeners.forEach (listener=> {
            console.log(listener, this.$root);
            const method = capitalize(listener);
            console.log(method)
                //Аналог addEventListener
                this.$root.on (listener, () =>{})
        })

    }
    removeDOMListeners (){
        
    }
}