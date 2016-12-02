var sql = require('seriate');

var config = {
  "name": "NAME OF ROUTE",
	"server": "IP ADDRESS HERE",
	"user": "USERNAME HERE",
	"password": "PASSWORD HERE",
	"database": "DATABASE NAME"
};

sql.setDefault(config);

sql.execute({	
	query: "SELECT * FROM Policy WHERE policyNum = 'APX-LTD-00001021-06'"
}).then(function(results){
	console.log(results);
}, function(err) {
	console.log('Whoops....err', err);
})
