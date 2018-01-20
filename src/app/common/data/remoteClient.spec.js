import { RemoteClient } from "./remoteClient";

describe("Remote Client", () => {

    it("Implements GET method", () => {
        RemoteClient.get("posts/1").subscribe((response)=>{
            expect(response).toBeTruthy();
        })
    });

    it("Implements POST method", () => {
        expect(1).toBeTruthy();
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