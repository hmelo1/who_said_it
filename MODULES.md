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

var people = {
    people: ['Will', 'Steve'],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    cacheDom: function() {
        this.$el = $('#peopleModule');
        this.$button = this.$el.find('button');
        this.$input = this.$el.find('input');
        this.$ul = this.$el.find('ul');
        this.template = this.$el.find('#people-template').html();
    },
    bindEvents: function() {
        this.$button.on('click', this.addPerson.bind(this));
        this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    render: function() {
       var data = {
           people: this.people,
       };
       this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson: function() {
        this.people.push(this.$input.val());
        this.render();
        this.$input.val('');
    },
    deletePerson: function(event) {
        var $remove = $(event.target).closest('li');
        var i = this.$ul.find('li').index($remove);

        this.people.splice(i, 1);
        this.render();
    }

};

people.init();
