$(document).ready (function() {
	displayGrid(16);
	$('.square').mouseenter(function() {
		$(this).css ("background", "white");
	});
	
	$('.clear').click(function() {
		clean();
	});
	
	$('.normal').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter (function() {
			$(this).css("background", "white");
		});
	});
	
	$('.red').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter (function() {
			$(this).css("background", "red");
		});
	});
	
	$('.blue').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter(function() {
			$(this).css("background", "blue");
		});
	});
	
	$('.green').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter(function() {
			$(this).css("background", "green");
		});
	});
	
	$('.orange').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter(function() {
			$(this).css("background", "orange");
		});
	});
	
	$('.purple').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter(function() {
			$(this).css("background", "purple");
		});
	});
	
	$('.trail').click (function() {
		setGrid();
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function() {
			$(this).fadeTo('fast', 1);
		});
	});
});

function setGrid() {
	var col = prompt("Choose the number of columns: ");
	displayGrid(col);
	clean();
}

function clean() {
	$('.square').css("background", "#2C2C2A").css('opacity', '1');
}

function displayGrid (n) {
	var size = 960;
	var boxSize = (960 - 4*n)/n;
	var wrap = $(".wrap").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append($("<div></div>").addClass("square").height(boxSize).width(boxSize));
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
}

