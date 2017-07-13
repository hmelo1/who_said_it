Modular JS //

*Self Contained Module
 - Everything to do with my module is in my module
 - No global variables
 - If a module manages more than one thing it shoud be split up

*Separation of Concerns

*DRY Code 

*Efficient DOM usage
 - Very few $ selections 

*All Events Can be Unbound

Object Literal Pattern // 

var myModule = {
	name: "Joel",
	age: 43,
	sayName: function() {
		alert(this.name)
	},
	setName: function(newName) {
		this.name = newName; 
	}
}

myModule.setName("James")
myModule.sayName()

var people = (function () {
	var name = "Will"

	function sayName() {
		alert(name);
	}

	return {
		sayName: sayName
	}
})()

alert(name)