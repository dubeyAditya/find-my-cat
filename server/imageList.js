var fs = require('fs');
module.exports = function imageList(req, res) {
    var images = fs.readSync('../src/assets/img');
    console.log(images);
    res.send([]);
}