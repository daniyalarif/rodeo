

function updateRC(preferenceName, preferenceValue) {
  $.post("/preferences", { name: preferenceName, value: preferenceValue }, function(res) {
    console.log(res);
  });
}

function formatFilename(filename) {
  // strange windows issue w/ javascript
  if (1==2) { // path.sep=="\\") {
    return filename.replace(/\\/g, '\\\\');
  } else {
    return filename;
  }
}

function pathJoin(parts){
  // TODO: handle windows
  var separator = '/';
  var replace   = new RegExp(separator+'{1,}', 'g');
  return parts.join(separator).replace(replace, separator);
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
