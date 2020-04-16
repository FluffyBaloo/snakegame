let snake;
const rez = 20;
let food;
let w;
let h;
let dirs;

function setup() {
	createCanvas(400, 400);
	w = floor(width / rez);
	h = floor(height / rez);
	frameRate(5);
	snake = new Snake();
	
	dirs = {
		[LEFT_ARROW]: createVector(-1, 0),
		[RIGHT_ARROW]: createVector(1, 0),
		[DOWN_ARROW]: createVector(0, 1),
		[UP_ARROW]: createVector(0, -1)
	};
	
	foodLocation();
}

function foodLocation() {
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector(x, y);
}

function keyPressed() {
	var dir = dirs[keyCode];
	if (dir) {
		snake.setDir(dir);
	}
}

function draw() {
	scale(rez);
	background(220);
	if (snake.update(food)) {
		foodLocation();
	}
	snake.show();

	if (snake.endGame()) {
		print("END GAME");
		background(255, 0, 0);
		noLoop();
	}

	noStroke();
	fill(100, 0, 0);
	rect(food.x, food.y, 1, 1);
}
