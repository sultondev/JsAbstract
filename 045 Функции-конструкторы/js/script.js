function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		return `Hello ${name}`;
	}
}
User.prototype.exit = function () {
	console.log(`User ${this.name} quit`)
}

const userOne = new User('sultondev', 16);
const userTwo = new User('shokhpro', 17);

console.log(userOne)
console.log(userTwo.hello())
userTwo.exit()