import { Observable } from "rxjs";
import {HttpClient} from "./http/httpClient";
import {WebSocketClient} from "./ws/websocketClient";
import * as AppConfig from "../../config/appConfig"

class RemoteClient {    
  
    
    constructor(){
        this.initClient();
        this.requestInterceptors =[];
        this.responseInterceptors=[];
    }

    static getInstance(){
        if(RemoteClient.instance===null || RemoteClient.instance===undefined){
            RemoteClient.instance = new RemoteClient();
            return RemoteClient.instance;
        }else{
            return RemoteClient.instance;
        }
    }
    
    initClient(){        
        let remoteApiConfig = AppConfig["remoteApi"];                
        let url = remoteApiConfig["url"];
        if(remoteApiConfig["mode"]==="http"){
            this.instance = new HttpClient();
        }else  if(remoteApiConfig["mode"]==="ws"){
            this.instance = new WebSocketClient(url);
        }
    }

    addRequestInterceptor(inteceptors){
        this.requestInterceptors.push(...inteceptors);
    }

    addResponseInterceptor(inteceptors){
        this.responseInterceptors.push(...inteceptors);
    }

    get(url,payload){        
        if(RemoteClient.instance.instance instanceof HttpClient){
            return RemoteClient.instance.instance.get(url,payload);
        }else if(RemoteClient.instance.instance instanceof WebSocketClient){

            let data = {
                method:"GET",
                url :url,
                payload:payload
            }
            return RemoteClient.instance.instance.send(JSON.stringify(data));
        }
    }

    post(url,payload){
       if(RemoteClient.instance instanceof HttpClient){
            RemoteClient.instance.post(url,payload);
        }else if(RemoteClient.instance instanceof WebSocketClient){

            let data = {
                method:"POST",
                url :url,
                payload:payload
            }            
            RemoteClient.instance.send(JSON.stringify(data));
        }
    }

    put(url,payload){
        if(RemoteClient.instance instanceof HttpClient){
            RemoteClient.instance.put(url,payload);
        }else if(RemoteClient.instance instanceof WebSocketClient){

            let data = {
                method:"PUT",
                url :url,
                payload:payload
            }
            
            RemoteClient.instance.send(JSON.stringify(data));
        }
    }

    delete(url,options){
        // IMPLEMENTATION PENDING
    }

    head(url,options){
        // IMPLEMENTATION PENDING
    }

}
RemoteClient.instance = null;

let rcInstance = new RemoteClient.getInstance();
export {rcInstance as RemoteClient}