class HttpClient{
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

class HttpRequest {

}

class HttpResponse{

}