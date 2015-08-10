Hopefully the following post is appropriate for this forum...

      function unite(arr1, arr2, arr3) {
        var merge = function(coll,item) {
          if (coll.indexOf(item) < 0)
            coll.push(item);
          return coll;
        };
        //TODO this can be simplified
        arr1 = arr2.reduce(merge, arr1);
        arr1 = arr3.reduce(merge, arr1);
        return arr1;
      }
      unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

I've already submitted an answer for "Sorted Union" but it was without using "reduce", which uses a "callback function". The answer that I've found, shown above uses it.  

I've spent several hours so far trying to understand where "merge" gets its arguments. I understand from reduce's prototype that its first argument is a callback function (which is merge in this case), and I get what a callback function is. And the callback function's arguments are supposedly: (previousValue, currentValue, index, array) when being called by "reduce", which steps, one-by-one, through the arrays somehow using merge. Maybe "item" matches up with being currentValue, but that's it.  

I don't know where someone's supposed to learn this type of programming because there are no examples like it in "prototypes" and "callback functions" where arguments required seem to change depending on context.  

I would greatly appreciate someone explaining the above example to me or at least where the heck I would learn to do what's apparently been done in this example.  

**chris dot r dot lafave at gmail dot com**
