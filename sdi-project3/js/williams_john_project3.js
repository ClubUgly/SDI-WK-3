    //John Williams
    //October 13, 2011
    //SDI Deliverable 3
    //Paint Rogue's Finger Nails.

//alert("JavaScript works!");

//procedure start
var paintNails = function(meals){
	console.log("Rogue wants me to paint all her nails today.");
	if(meals >= 3){
	console.log ("We can paint Rogue's nails today");
	}else{
		if(meals < 3 || meals <= 3){
		console.log("Rogue needs to eat her food first.");
		}else{
		console.log("We won't be painting any nails today.");
		}
	}

};
paintNails(0);
//end

//String start
var feedWho = function (firstName, food) {
	console.log("Prepared some " + food + " for " + firstName + ",");
	var feedUs = function(whatsOurName) {
		var food = "broccoli";
		console.log("Prepared some " + food + " for " + whatsOurName + ",");
	};
	feedUs("Rogue");
	console.log("But, " + firstName + " only ate her " + food + ".");
};

feedWho("Rogue", "carrots");

console.log("Let's go to the store to see what we can get with $10.");
//end

//Number start
var buyPolish = function(cashOnHand){
	var pricePerPolish = 2,
	onePolish;
	if (cashOnHand < pricePerPolish) {
	console.log("that's not enough to buy anything!");
	onePolish = 0;
	}
	else {
	onePolish = Math.floor(cashOnHand / pricePerPolish);
	}
	return onePolish;
};

var gotPolish = buyPolish(10);
console.log("Great! We got " + gotPolish + " bottle's of polish today.");
//end

//Numbers 2 start
var colors = 5;
var bottles = 5;
var daughterName = "Rogue";

var totalBottles = function (b){
	var bottles = b - 2 + colors;
	return bottles;
};

var totalColors = function(name, bottles, message){
	console.log(name + "'s nail kit has " + bottles + " colors. " + message);
};

var area = totalBottles(2);
totalColors(daughterName, bottles, "Woohoo!");
//end

//Array start

        var fingerNamesRight = [
        	"Right Thumb", 
        	"Right Index Finger", 
        	"Right Middle Finger", 
        	"Right Ring Finger", 
        	"Right Pinky Finger"
],

 	
			totalFingers = [
			5, 
			4, 
			3, 
			2, 
			1
],
			
			familyName = [
			"Rogue",
			"Jay"
],

			nailColors = [
			"pink", 
			"blue", 
			"lime", 
			"orange", 
			"yellow" 

];

        var visitWhichFinger = function(whatFinger) {
            var whichFinger = fingerNamesRight[whatFinger],
            whatColor = nailColors[fingerNumber],
            howManyWeGot = totalFingers[fingerNumber]
;
            console.log(familyName[0] + " wanted her dad " + familyName[1] + " the mechanic to paint her " + whichFinger + " with the " + whatColor + " polish. Let's get started!");
            
//Saving this bit to learn later - will separate the hands before applying and removing static info :)
//if (whichFinger < 5) { whichColor = whichFinger; } else { whichColor = whichFinger - 4; }
            
            for (var fingers = 0; fingers < howManyWeGot; fingers += 5) {
                    var fingersToDo = howManyWeGot - fingers;
                    console.log("We currently have " + whatFinger + " nails completed. " + fingersToDo + " left to paint.");
            }
            console.log("We finished painting the " + whichFinger + " "+ whatColor + ".");
        };

        for (var fingerNumber = 0, s=fingerNamesRight.length; fingerNumber < s; fingerNumber++) { /*speed enhancement*/
            visitWhichFinger(fingerNumber); 
        };
        
console.log("All " + familyName[0], "'s fingers are painted and she is very happy today!");

//left hand


        var fingerNamesLeft = [
        	"Left Thumb", 
        	"Left Index Finger", 
        	"Left Middle Finger", 
        	"Left Ring Finger", 
        	"Left Pinky Finger"
],

			totalFingersLeft = [ 
			5, 
			4, 
			3, 
			2, 
			1
],
			
			familyName = [
			"Rogue",
			"Jay"
],

			nailColorsLeft = [
			"pink", 
			"blue", 
			"lime", 
			"orange", 
			"yellow"

];
        var visitWhichFinger = function(whatFinger) {
            var whichFinger = fingerNamesLeft[whatFinger],
            whatColor = nailColorsLeft[fingerNumber],
            howManyWeGot = totalFingersLeft[fingerNumber]
;
            console.log(familyName[0] + " wanted her dad " + familyName[1] + " the mechanic to paint her " + whichFinger + " with the " + whatColor + " polish. Let's get started!");

            
            for (var fingers = 0; fingers < howManyWeGot; fingers += 5) {
                    var fingersToDo = howManyWeGot - fingers;
                    console.log("We currently have " + whatFinger + " nails completed. " + fingersToDo + " left to paint.");
            }
            console.log("We finished painting the " + whichFinger + " "+ whatColor + ".");
        };

        for (var fingerNumber = 0, s=fingerNamesLeft.length; fingerNumber < s; fingerNumber++) { /*speed enhancement*/
            visitWhichFinger(fingerNumber); 
        };
        
console.log("All " + familyName[0], "'s fingers are painted and she is very happy today!");

//end


//Boolean start
console.log('Rogue\'s dad looks tired.');
var dadsTired = true;
	if (dadsTired === true) {
	console.log("Jay is exhausted and is now going to sleep.");	
} else {
	console.log("Nope, Jay is now going to watch the television.");
}; 
//end

//object accessor and method

var daddy = {
	name: "Jay", //property
	checklist: [
		"Ate Dinner",
		"Went to the store",
		"Painted Nails",
		"Watched TV"
	],
	goToSleep: function (){ //method
		console.log("Lets go to sleep.");
	}
};

       