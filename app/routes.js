module.exports = function(app) {
	var counter = 0;
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {
		// use mongoose to get all nerds in the database
		Nerd.find(function(err, nerds) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(nerds); // return all nerds in JSON format
		});
	});

	app.get('/api/stuff', function(req, res) {
		var stuff = [{
			name: 'Macallan 12',
			price: 50
		}, {
				name: 'Chivas Regal Royal Salute',
				price: 10000
			}, {
				name: 'Glenfiddich 1937',
				price: 20000
			}];
		counter++;
		var date = new Date();
		console.log(counter +' ' + date );
		res.json(stuff);
	});

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	//app.get('*', function(req, res) {
	//	res.sendfile('./public/index.html'); // load our public/index.html file
	//});

};