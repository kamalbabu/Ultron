import { Subject} from "rxjs";

export class WebSocketClient {
    constructor(url) {
        this.init(url);
        this.observable = this.getObservable;
    }

    static connect(url) {
        return new WebSocketClient(url);
    }

    init(url) {
        this.socket = new WebSocket(url);
        this.socketSubject = new Subject();
        this.socket.onmessage = this.handleMessageEvent();
        this.socket.onerror = this.handleErrorEvent();
        this.socket.onopen = this.handleOpenEvent();
        this.socket.onclose = this.handleCloseEvent();
        this.readyState = this.socket.readyState;
    }

    getObservable(){
        return this.socketSubject;
    }

    send(data){
        if(this.socket&& this.socket.readyState===1){
            this.socket.send(data);            
        }else{
            throw new Error("No socket opened");
        }        
        return this.socketSubject;
    }

    handleErrorEvent() {
        const self = this;
        return function(evt){
            self.socketSubject.next(evt);
        }
    }

    handleOpenEvent(){
        const self = this;
        return function(evt){
            self.socketSubject.next(evt);
        }
    }

    handleCloseEvent() {
        const self = this;
        return function(evt){
            self.socketSubject.next(evt);
        }
    }

    handleMessageEvent() {
        const self = this;
       return function(evt){
             self.socketSubject.next(evt);
       }
    }
}