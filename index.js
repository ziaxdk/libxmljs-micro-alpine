const libxmljs = require("libxmljs");
// const osmosis = require('osmosis');
const micro = require('micro')
const PORT = process.env.PORT || 3000
 
const server = micro(async (req, res) => {
	return await P((resolve, reject) => {
		setTimeout(() => {

			var xml =  '<?xml version="1.0" encoding="UTF-8"?>' +
			           '<root>' +
			               '<child foo="bar">' +
			                   '<grandchild baz="fizbuzz">grandchild content</grandchild>' +
			               '</child>' +
			               '<sibling>with content!</sibling>' +
			           '</root>';
			 
			var xmlDoc = libxmljs.parseXml(xml);
			 
			// xpath queries 
			var gchild = xmlDoc.get('//grandchild');
			 
			resolve(gchild.text());  // prints "grandchild content" 
		}, 1000)
	})

})
 
server.listen(PORT, () => console.log('Ready on', PORT))

 const P = function (resolve, reject) {
 	return new Promise(resolve, reject)
 }


