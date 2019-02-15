var fs = require('fs'),incomingLink = /github\.com\/freecodecamp\/freecodecamp\/wiki/gi,outgoingLink = 'freecodecamp.com/wiki/docs';
// Get File list
fs.readdir('../pages/docs/', function(err, folders) {
  if (err) {throw err;}
  var fileList = folders.filter(function(folder){return !(/^\./).test(folder);
  }).map(function(folder) {
    // Make directories/filenames
    var filename = folder + '/index.md';
    var title = folder.replace(/-/g, ' ').replace('.md', '');
    return {filename: filename,title: title};
  });
  fileList.forEach(function(fileobj) {
    // Create directory
    var newFileName = '../pages/docs/' + fileobj.filename,
        data = fs.readFileSync(newFileName, 'utf-8'),
        fd = fs.openSync(newFileName, 'w+');
    data = data.replace(incomingLink, outgoingLink);
    var newData = new Buffer(data),
    header = '---\ntitle: ' + fileobj.title + '\norder: 5\n---\n',
    buffer = new Buffer(header);
    fs.writeSync(fd, buffer, 0, buffer.length);
    // Append old data
    fs.writeSync(fd, newData, 0, newData.length);
    fs.close(fd);
  });
});
