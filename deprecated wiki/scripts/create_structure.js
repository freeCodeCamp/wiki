var mkdirp = require('mkdirp'),fs = require('fs');
// Get File list
fs.readdir('../', function(err, files) {
  if (err) { throw err;}
  var fileList = files.filter(function(file) {
    return (/\.md$/.test(file) && !(/^_/).test(file));
  }).map(function(file){
    var filename = file,dir = file.replace('.md', '');
    return {filename: filename,dir: dir};
  });
  fileList.forEach(function(fileobj) {
    // Create directory
    mkdirp('../pages/docs/' + fileobj.dir, function(err) {
      if (err) { throw err;}
      // Copy File
      var newFileName = '../pages/docs/' + fileobj.dir + '/index.md';
      fs.createReadStream('../'+ fileobj.filename).pipe(fs.createWriteStream(newFileName));
    });
  });
});
