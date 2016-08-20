# Challenge Understand String Immutability

In Javascript, String values are `immutable`, which means that they cannot be altered once created.

## Example

```javascript
var myStr = "Bob";
myStr[0] = "J";
```

Would not work, the only way would be:

```javascript
var myStr = "Bob";
myStr = "Job";
```
