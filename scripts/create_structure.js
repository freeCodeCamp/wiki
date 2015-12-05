/*
Automate converting the raw "wiki" into the proper hierarchy -- node script
- Readin in the file list
- Create top-level folders based on file name (Assume flat structure)
- Copy the files into their folders as index.md
-- All in "Pages"
*/

var promise = require('promise');
var fs = require('fs');
var readDir = promise.denodeify(require('fs').readdir);

function readWikiDir(wikiPath, callback) {
  return readDir(wikiPath).nodeify(callback);
}

fs.readdir('../', function(err, files) {
  if(err) throw err;
  console.log(files);
});
