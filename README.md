# google-places
A jQuery plugin to render google places data.

Currently the only only thing that is rendered is a list view of reviews. 

### Install
Install with bower.
```
bower install google-places
```

### Include
Include these files in the head
```
<link rel="stylesheet" href="bower_components/google-places/google-places.css">
<script src="bower_components/google-places/google-places.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places"></script>
```

### Options

| Required | Description |
|----------|-------------|
| **placeId**  | google placeId |

| Optional | Description |
|----------|-------------|
| **render** | Currently only supports reviews and schema |
| **min_rating** | Only display reviews with a minimum rating (not applicable for schema)|
| **max_rows** | Maximum number of rows to show (not applicable for schema)|
| **rotateTime** | Time in MS to show review before rotating or false for no rotate |

### Usage

```
$("#google-reviews").googlePlaces({
    placeId: 'ChIJa2uI-Nt4bIcR5cvnOxD4cFg'
  , render: ['reviews']
  , min_rating: 4
  , max_rows:5
  , rotateTime:5000
});
```
