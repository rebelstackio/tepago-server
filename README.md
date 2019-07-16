# yakchat-server
server providing API endpoints apart from auth-auth and client-specific

yakchat-server provides RESTful API for :

- orders
- trans
- items

It will rely upon JWT granted to users via yakchat-auth-server and synchonize data with client's firebase to avoid excess reads (that can be served by the client's firebase) along with being able to use firebase as a push method to connected users

The main part of it's work will be providing item "hold" tokens and communicating with backend-apis for purchases
