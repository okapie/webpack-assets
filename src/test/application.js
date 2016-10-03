import Person from './person';
import { hogeHoge } from './style.css';
// require("./style.css"); // Also it works with this code.

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