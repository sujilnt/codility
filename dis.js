const request = require('request');
const disruptive_hook = "https://api.devicepilot.com/webhooks/GtXRvj6O3Pep13WLBpevOQ";
request({
	method: 'POST',
	url: "https://api.devicepilot.com/devices",
	json: {"$id":"openning_times","targetTemperature":30,"currentTemperature":30,"latitude":51.5,"longitude":0.12},
	headers: {
		Authorization: 'Token aa2601f4d4c677ef30faef334994370c',
	},
}, (err, response, body) => {
	if (err || response.statusCode !== 201) {
		console.log("data",err, body);
		return;
	}
	
	console.log('OK');
});
