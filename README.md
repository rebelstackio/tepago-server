# yakchat-server
server providing API endpoints apart from auth-auth and client-specific

yakchat-server provides RESTful API for :

- orders
- trans
- items

It will rely upon JWT granted to users via yakchat-auth-server and synchonize data with client's firebase to avoid excess reads (that can be served by the client's firebase) along with being able to use firebase as a push method to connected users

The main part of it's work will be providing item "hold" tokens and communicating with backend-apis for purchases


## Sales State Chart

![sales-state-chart](docs/sales-state-chart.png?raw=true)

### Order States

- initialized
- with_items
- all_items_held
- deposit_paid
- deposit_paid_has_manual_items
	- deposit_paid_has_manual_item_refunded_replaced
	- deposit_paid_has_manual_items_confirmed
- deposit_paid_alerts_sent
- deposit_paid_alerts_read
- confirmed
- confirmed_alerts_sent
	- confirmed_item_delivered
	- confirmed_item_refunded
- completed
- customer_review_invite_sent
- archived


## Development

Yakchat server comes with a vagrant box for development.

```sh
cd yakchat-server/vagrant # Go to vagrant directory
vagrant up
```

Once the vm is fully booted. Go inside with:

```sh
vagrant ssh 
```

Make a `.env` file based on the sample with:

```sh
cd /home/vagrant/yakchat-server
ln -s .env.sample .env
```

And run the server with:

```sh
npm start
```

# Endpoints (Initial proposal)

## Items

```json
GET /items?filter={...}

GET /items/:id (Gets latest modified)

GET /items/:id/:modified

PUT /items/:id

PATCH /items/:id/:column/json-data
```

## Pricing

```json
POST /items/:id/:modified/pricing
```

## Trans

```json
POST /trans/:item_id/:modified/:pricing_id
```

## Orders

```json
GET /orders?filter={...}

GET /orders/:order_id

POST /orders
```

## Line Items

```
PUT /orders/:id/line-items/::timestamp

PATCH /orders/:id/line-items/::timestamp/:column/:json-path(optional)

DELETE /orders/:id/line-items/::timestamp
```