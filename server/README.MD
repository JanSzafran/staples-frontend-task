# Backend API

## Getting started

To launch use

```bash
npm start
```

## Routes

Here are all the default routes.

### Plural routes

```
GET    /products
GET    /products/157963
POST   /products
PUT    /products/157963
PATCH  /products/157963
DELETE /products/157963
```

### Filter

Use `.` to access deep properties

```
GET /products?general.name=Blekk BROTHER LC1280XLC blå
GET /products?id=774944&id=114990
```

### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.

```
GET /products?_page=2
GET /products?_page=2&_limit=15
```

_10 items are returned by default_

### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /products?_sort=brand.name&_order=asc
```

For multiple fields, use the following format:

```
GET /products?_sort=general.presentable_id,brand.name&_order=desc,asc
```

### Slice

Add `_start` and `_end` or `_limit` (an `X-Total-Count` header is included in the response)

```
GET /products?_start=20&_end=30
GET /products/1/products?_start=20&_limit=10
```

_Works exactly as [Array.slice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (i.e. `_start` is inclusive and `_end` exclusive)_

### Operators

Add `_ne` to exclude a value

```
GET /products?id_ne=774944
```

Add `_like` to filter (RegExp supported)

```
GET /products?brand.name_like=ESSELTE SVERIGE AB
```

### Full-text search

Add `q`

```
GET /products?q=adapter
```

### Database

```
GET /db
```

### Homepage

Returns default index file or serves `./public` directory

```
GET /
```
