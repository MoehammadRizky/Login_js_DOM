// Loop Di Array Object
var objPeople = [
	{ // Object ke 0 index
		username: "sam",
		password: "codify"
	},
	{ // Object ke 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object ke 2 index
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// dicek, bener nggak
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// kalau bener yaudah
			return
		}
	}
    // kalau gak bener maka code dibawah dijalankan
	console.log("incorrect username or password")
}