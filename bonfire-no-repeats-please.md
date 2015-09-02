This task requires to look at each possible permutation of a string. This is best done using a recursion function. Being able to build a function which collects all permutations of a string is a common interview question, so there is no shortage of tutorials out there on how to do this, in many different code languages.

# Permutation Recursion Function
This task can still be daunting even after watching a tutorial. You will want to send each new use of the function a new string (or character array) that is being built, a position in your new string that's going to be filled next, and an idea of what characters (more specifically positions) from the original string have yet to be used. The pseudo code will look something like this:

    var str = ???;
    perm(current position in original string, what's been used in original string, current string build thus far){
      if(current string is finished) {
        print current string;
      }else{
        for(var i = 0; i < str.length; i++) {
          if(str[i] has not been used) {
            put str[i] into the current position;
            mark str[i] as used
            perm(current position in original string, what's been used in original string, current string build thus far)
            unmark str[i] as used because another branch in the tree for i + 1 will still likely use it;
          }
        }
      }
    }
    perm(0, nothing used yet, empty new string (or array the same size as str);
    
A way to visualize this is by considering a tree that starts with the first character of your string:
![Permutation Tree](http://i.imgur.com/GDi4QlU.png)