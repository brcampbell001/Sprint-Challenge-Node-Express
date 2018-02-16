## Questions

1. What is Node?

+ Technically, Node is not a Javascript frameworks but many frameworks such as Express.js have been written under its umbrella. Node is basically a proto-server and processes in a loop that accepts and responds to requests. These events loops can initiate other requests such as read files etc. It makes it easy to build event-driven application servers. 

2. What is Express?

+ Express, hosted within the Node.js runtime environment, is probably the most popular JavaScript web framwork for Node. It allows for a developer to write handlers for requests at different routes. Set a port to use for connecting and rendering responses. Allow for the addition of middleware within the request handling pipeline. While, in all, Express is somewhat minimalist in design, the additional middleware packages make it quite a robust framework.

3. What is Middleware?

+ So, middlewares are functions that can be invoked by Express during routing before the final request handler is. By definition, these lie in the middle between raw requests and final routes. Also, middleware functions are stacked meaning they are invoked in order that they are added. 

4. What is an endpoint?

+ An endpoint is a unique URL that a developer would point their HTTP client at to interact with data resources.