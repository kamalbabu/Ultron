import { Observable } from "rxjs";

class RemoteClient {
    baseUrl = "";
    constructor(baseUrl){
        this.baseUrl=baseUrl;
    }

    get(url,options){
        let fetchPromise = fetch(`${this.baseUrl}/${url}`);
       return Observable.from(fetchPromise);
    }

    post(url,options){
        //console.log("POST");
    }

    put(url,options){
        //console.log("POST");
    }

    delete(url,options){
        //console.log("POST");
    }

    head(url,options){
        //console.log("HEAD");
    }

}

let rc  = new RemoteClient("https://jsonplaceholder.typicode.com");
export {rc as RemoteClient};