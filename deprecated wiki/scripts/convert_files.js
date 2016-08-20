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
var incomingLink = /github\.com\/freecodecamp\/freecodecamp\/wiki/gi;
var outgoingLink = 'freecodecamp.com/wiki/docs';

// Get File list
fs.readdir('../pages/docs/', function(err, folders) {
  if (err) {
    throw err;
  }
  var fileList = folders.filter(function(folder) {
    // Remove stupid hidden folders
    return !(/^\./).test(folder);
  }).map(function(folder) {
    // Make directories/filenames
    var filename = folder + '/index.md';
    var title = folder.replace(/-/g, ' ').replace('.md', '');
    return {
      filename: filename,
      title: title
    };
  });

  fileList.forEach(function(fileobj) {
    // Create directory

    var newFileName = '../pages/docs/' + fileobj.filename;
    // Read existing contents into data
    var data = fs.readFileSync(newFileName, 'utf-8');
    var fd = fs.openSync(newFileName, 'w+');

    data = data.replace(incomingLink, outgoingLink);
    var newData = new Buffer(data);

    var header = '---\ntitle: ' + fileobj.title + '\norder: 5\n---\n';
    var buffer = new Buffer(header);
    // Write new data
    fs.writeSync(fd, buffer, 0, buffer.length);
    // Append old data
    fs.writeSync(fd, newData, 0, newData.length);
    fs.close(fd);
  });
});
