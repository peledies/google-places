# google-places
A jQuery plugin to render google places data.

Currently the only only thing that is rendered is a list view of reviews. 

### Options

| Required | Description |
|----------|-------------|
| **placeId**  | google placeId |

| Optional | Description |
|----------|-------------|
| **render** | Currently only supports reviews |
| **min_rating** | Only display reviews with a minimum rating |
| **max_rows** | Maximum number of rows to show |

### Usage

```
$("#google-reviews").googlePlaces({
    placeId: 'ChIJa2uI-Nt4bIcR5cvnOxD4cFg'
  , render: ['reviews']
  , min_rating: 4
  , max_rows:5
});
```