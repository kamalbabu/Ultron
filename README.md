# Ultron
Opionionated frond end framework

WORK IN PROGRESS

## Todo 

1. Abstract Gateway
        - Connect by HTTP , Websocket

2. Implement a high level chart abstraction
3. Logging
4. Application Error Handling
5. Offline Capability





### Remote Client

Remote Client will provide abstractions for HTTP Methods.
It should be able to register interceptors

### Interceptors

Application must register interceptor function on boot  or within any specific area in app.
It must be able to remove a particular interceptor function ( Say i do not need this interceptor anymore)

Some interceptors might be fire and forget ( i.e one time)
