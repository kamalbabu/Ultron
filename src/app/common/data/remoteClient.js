import { Observable } from "rxjs";

class RemoteClient {
    baseUrl = "";
    constructor(baseUrl){
        this.baseUrl=baseUrl;
    }

    get(url,payload){
        let options ={
            method: "GET", 
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        }
        let fetchPromise = fetch(`${this.baseUrl}/${url}`,options);
       return Observable.from(fetchPromise);
    }

    post(url,payload){
        let options ={
            method: "POST", // or 'PUT'
            body: JSON.stringify(payload.data), 
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        }
        let fetchPromise = fetch(`${this.baseUrl}/${url}`,options);
        return Observable.from(fetchPromise);
    }

    put(url,payload){
        let options ={
            method: "PUT", // or 'PUT'
            body: JSON.stringify(payload.data), 
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        }
        let fetchPromise = fetch(`${this.baseUrl}/${url}`,options);
        return Observable.from(fetchPromise);
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


class Interceptors{
    requestInterceptors =[];
    responseInterceptors=[];

    
    addRequestInterceptor(inteceptors){
        this.requestInterceptors.push(...inteceptors);
    }

    addResponseInterceptor(inteceptors){
        this.responseInterceptors.push(...inteceptors);
    }

}