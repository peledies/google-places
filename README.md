# google-places
A jQuery plugin to render google places data.

Currently the only only thing that is rendered is a list view of reviews. 

[Demos](http://peledies.github.io/google-places/)

### Install
Install with bower.
```sh
bower install google-places
```

### Install with npm
```sh
npm install google-places-data
```

### Include
Include these files in the head
```html
<link rel="stylesheet" href="bower_components/google-places/google-places.css">
<script src="bower_components/google-places/google-places.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places"></script>
```

### Options

| Required | Description |
|----------|-------------|
| **placeId**  | google placeId |

| Optional | Type | Description | Default |
|----------|----------|-------------|----------|
| **render** | Array | supports reviews, schema, phone, address, hours, staticMap | ['reviews','phone','hours','address,'staticMap']
| **min_rating** | Int | Only display reviews with a minimum rating (not applicable for schema)| 0
| **max_rows** | Int | Maximum number of rows to show - 0 for all (not applicable for schema)| 0
| **map_plug_id** | String | ID to use for 'map-plug'| map-plug
| **rotateTime** | Int | Time in MS to show review before rotating or false for no rotate | false
| **schema** | Object | Options for displaying Schema | see below |

### Optional Schema Markup
The schema markup will render something like below: 
```html
<span itemscope="" itemtype="http://schema.org/Store">
    <meta itemprop="url" content="http://example.com">
    Google Users Have Rated 
    <span itemprop="name">
        Hostel Fish
    </span> 
    <span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
        <span itemprop="ratingValue">5</span>/<span itemprop="bestRating">5</span> 
        based on <span itemprop="ratingCount">5</span> ratings and reviews
    </span>
</span>
```

| Schema | Type | Description | Default |
|----------|----------|-------------|----------|
| **displayElement** | Object | Jquery object or string location where the schema will be appended | '#schema' |
| **beforeText** | String | Text before ratings | 'Google Users Have Rated' |
| **middleText** | String | Text in between ratings | 'based on' |
| **afterText** | String | last text in rating | 'ratings and reviews' |
| **type** | String | schema.org [type](https://schema.org/docs/full.html) | 'Store' |

### staticMap options
| property | Description | Default |
|----------|-------------|----------|
| **width** | map width | 512 |
| **height** | map height | 512 |
| **zoom** | zoom index for map | 17 |
| **type** | map type (roadmap, terrain, satellite, hybrid) | roadmap |


### Usage

```js
$("#google-reviews").googlePlaces({
    placeId: 'ChIJa2uI-Nt4bIcR5cvnOxD4cFg'
  , render: ['reviews']
  , min_rating: 4
  , max_rows:5
  , map_plug_id: 'map-plug'
  , rotateTime:5000
  , schema: {
            displayElement: '#schema' // optional, will use "#schema" by default
          , beforeText: 'Googlers rated'
          , middleText: 'based on'
          , afterText: 'awesome reviewers.'
          , type: 'Hostel'
      }
  , address:{
    displayElement: "#custom-address-id" // optional, will use "#google-address" by default
  }
  , phone:{
    displayElement: "#custom-phone-id" // optional, will use "#google-phone" by default
  }
  , staticMap:{
      displayElement: "#google-static-map" // optional, will use "#google-static-map" by default
  }
  , hours:{
      displayElement: "#google-hours" // optional, will use "#google-hours" by default
  }
});
```

### Events
The plugin will trigger the following events, namespaced to '`googlePlaces`'

| Event | Target | Description |
|----------|-------------|----------|
| **beforeRender** | element plugin | Triggered just before 'display elements' any are rendered |
| **afterRender** | element plugin | Triggered just after all 'display elements' are rendered |

```js
function sayHi() {
    alert('Hi!');
}

$("#google-reviews").on('afterRender.googlePlaces', sayHi);
```

