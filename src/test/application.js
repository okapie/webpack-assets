import Person from './person';
require("./style.css");

class Friend extends Person{
	constructor(name) {
		super(name);
	}
	callName() {
		alert(this.name);
	}
}

var friend = new Friend('Okapie!!');

friend.callName();