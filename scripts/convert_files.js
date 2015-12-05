/*
Automated cleanup / Setup -- node script
-- All in "Pages"
- Add Headers to each file
  - Title, Order (whatever that is)
- ? Automated cleanup of Markdown
IE: ###NoSpace === ### With Space
Regex :   /^(\s+#{1,4})(\S)/ => /$1 $2/
- List of regex to automate
JSON Array/Object
  - Link modification/cleanup
*/

var fs = require('fs');

// Get File list
fs.readdir('../pages/', function(err, folders) {
  if(err) throw err;
  var fileList = folders.filter(function(folder) {
    // Remove stupid hidden folders
    return !/^\./.test(folder);
  }).map(function(folder) {
    // Make directories/filenames
    var filename = folder+'/index.md';
    var title = folder.replace(/-/g, ' ').replace('.md', '');
    return { filename: filename, title: title};
  });
  fileList.forEach(function(fileobj) {
    // Create directory
    var newFileName = '../pages/'+fileobj.filename;

    var data = fs.readFileSync(newFileName); //read existing contents into data
    var fd = fs.openSync(newFileName, 'w+');

    var header = '---\ntitle: ' + fileobj.title + '\norder: 5\n---\n';

    var buffer = new Buffer(header);

    fs.writeSync(fd, buffer, 0, buffer.length); //write new data
    fs.writeSync(fd, data, 0, data.length); //append old data
    fs.close(fd);

    //fs.createReadStream('../' + fileobj.filename).pipe(fs.createWriteStream(newFileName));
  });
});
