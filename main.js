// Q1 WD1
$('img').attr('src', 'https://auto.ndtvimg.com/car-images/big/ferrari/portofino/ferrari-portofino.jpg?v=27')


// Q2 WD1
$('button#go').on('click', function(){ $('p#output').text( $('input#color').val() ).css('color', 'red'); });


// Q3 WD1
$('button#beeperOne').on('click', function() {alert('you clicked on the button')})


//Q4 => A.Insert content to the end of an element.


// Q5 WD1
$('#secret').hide();


// Q6 => A. body is not in a string + C. the background-color is not in a string
$('body').css('background-color', 'green')


// Q7 WD1
$('body').css('background-color', 'red')


// Q8 WD1
$('ol').append('<li> Here is thing four.')

////////////////////////////////////////////////////////////////////////////////////////////

// Web Development 2 //

// Start Q1 WD2
var name = "Window";

var alice = {
	name: "Alice",
	sayHi: function() {
		alert(this.name + " says Hi");
		}
	};

var bob = { name: "Bob" };

setTimeout(alice.sayHi.call(bob), 1000); // Q1 dev2 => F. Bob says hi, immediately
// End Q1 WD2


// Start Q2 WD2
var alice = {
	name: "Alice",
	sayHello: function() {
		alert(this.name + " says hello");
		}
	};

var ali = { name: "Alice" };

setTimeout(alice.sayHello.call(ali), 1000);
// End Q2 WD2


// Q3 => result will be 20


// Q4 => result will be C. "Hi I am window"


// Q5 => result will be B. 20


// Q6 => message will be C. Alice says hi, after 1 second
var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);


// Q7 => D. DRY