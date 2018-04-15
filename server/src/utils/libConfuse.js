import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

function writeFile(filepath, data) {
  if (!fs.existsSync(filepath)) {
    var dirname = path.dirname(filepath);
    mkdirp(dirname, err => {});
  }
  fs.writeFileSync(filepath, data);
}

function replaceSpacesAndSpecialChars(myString) {
  return myString.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, "_");
}

export function generateTrayParams(trayId, username, vialDescriptions) {
  var output = '';

  output += `operator="${replaceSpacesAndSpecialChars(username)}"\n`;

  for (var i = 0, len = 6; i < len; i++) {
    var desc = replaceSpacesAndSpecialChars(vialDescriptions[i]);
    output += `vial${i+1}_desc=\"${(desc !== undefined) ? desc : ''}\"\n`;
  }

  writeFile(config.configurationFilePath[trayId], output);
}
