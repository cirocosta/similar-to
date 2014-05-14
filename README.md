# Similar To

Verifies if two objects are similar.

## Full Similarity

Two objects are meant to be fully similar if ALL of its fields are present in the other object. As similarity is different from equality, this module won't check for the values of the fields (this difers from `deepEqual`).

```javascript
var fullySimilar = require('similar-to').fullySimilar;

var a = {a: {b: "c"}, b: "c"};
var b = {a: {b: "d"}, b: "e"};

fullySimilar(a,b);

// true
```

## Partial Similarity

Partial similarity is meant to be the same case as the one stated above but for only a part of the second object being passed through.

```javascript
var partiallySimilar = require('similar-to').partiallySimilar;

var a = {a: {b: "c"}, b: "c"};
var b = {a: {b: "d"}};

partiallySimilar(b, a);

// true
```
