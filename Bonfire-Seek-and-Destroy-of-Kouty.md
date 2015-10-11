`/* C'est la premiere fois que j'utilise l'argument object. quel drole de machin.Dans une prochaine etape j'essaierai de trouver comment reussir avec un filtre. */





function strainer(arra, liste) {
    for (i = arra.length; i >= 0; i --){
        var item = arra[i];
        for (j = liste.length - 1; j >= 0; j --) {
            var  elemt = liste[j];
            if (item == elemt) {
                 arra.splice(i, 1);
            }
        }
   }
  return arra;
}
function destroyer(arr) {
  var elenco = Array.prototype.slice.call(arguments);

  liste = elenco.slice(1, elenco.length);


  // Remove all the values
 return strainer(arr, liste); 
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

`