var quotes = [
	"Oh god, hotdog burger man, take me to the drive-in and prove you love me.",
	"How about that shooting in Oregon. Hilarious!",
	"I couldn't give a shit about your stupid little projects.",
	"Get fucked.",
	"I would rather overdose on heroin.",
	"She was less interested in a clear container full of my dead skin flakes than the advertising had led me to believe.",
	"I have seen things today that make me ashamed.",
	"No one likes you, Badger."
];

var getJoelism = function() {
	$(".quote p").fadeOut(200, 'swing', function() {
		var n = Math.floor(Math.random() * quotes.length);
		var quote = quotes[n];
		$(".quote p").text(quote);
		$(".quote p").fadeIn();
	});
};

$(document).ready(function() {
	$("button").on("click", getJoelism);
	getJoelism();
});
