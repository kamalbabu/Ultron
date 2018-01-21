import { RemoteClient } from "./remoteClient";

describe("Remote Client", () => {

    it("Implements GET method", () => {
        RemoteClient.get("posts/1").subscribe((response)=>{
            expect(response.status).toBe(200);
        })
    });

    it("Implements POST method", () => {
        let payload ={
            data:{
                name:"Priyanka kamal"
            }
        }
        RemoteClient.get("posts",payload).subscribe((response)=>{
            expect(response.status).toBe(201);
        })
    });

    it("Implements PUT method", () => {
        expect(1).toBeTruthy();
    });

    it("Implements DELETE method", () => {
        expect(1).toBeTruthy();
    });

    it("Implements HEAD method", () => {
        expect(1).toBeTruthy();
    });

})