var sql = require('seriate');

var config = {
  "name": "Windhaven",
	"server": "192.168.7.57",
	"user": "Windhaven",
	"password": "clutch7&",
	"database": "Windhaven"
};

sql.setDefault(config);

sql.execute({	
	query: "SELECT * FROM Policy WHERE policyNum = 'APX-LTD-00001021-06'"
}).then(function(results){
	console.log(results);
}, function(err) {
	console.log('Whoops....err', err);
})
