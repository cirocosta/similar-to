# Similar To

Verifies if two objects are similar.

## Full Similarity

Two objects are meant to be fully similar if ALL of its fields are present in the other object. As similarity is different from equality, this module won't check for the values of the fields (this difers from `deepEqual`).

```javascript
var similarTo = require('similar-to');

```

## Partial Similarity

Partial similarity is meant to be the same case as the one stated above but for only a part of the second object being passed through.
