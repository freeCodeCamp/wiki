Hi everyone,

There is an issue with "Bonfire:Truncate a String". 
First heres the code:
```
    function truncate(str, num) {
  var truncd = '';
  if (str.length > num) {
    truncd = str.slice(0, num - 3) + '...';
    return truncd;
  }

  return str;
}
truncate("A-tisket a-tasket A green and yellow basket", 1, "");
```
It should not pass the first test that is
"A-tisket a-tasket A green and yellow basket", 1 should return "A-tisket..."

According to this test the console should shoe "A-tisket..."but the console says"A-tisket a-tasket A green and yellow bask..."

but to my surprise it still passed... I hope I will get an explaination to this