var fs = require('fs');

module.exports = {
    getData: function() { 
        return fs.readFileSync('./public/data.json', 'utf8');
    }
};
