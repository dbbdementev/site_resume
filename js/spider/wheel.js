window.onload = function() {
		var canvas = document.getElementById("canvas");

		// canvas dimensions
		var width = parseInt(canvas.style.width);
		var height = parseInt(canvas.style.height);

		// retina
		var dpr = window.devicePixelRatio || 1;
		canvas.width = width*dpr;
		canvas.height = height*dpr;
		canvas.getContext("2d").scale(dpr, dpr);

		// simulation
		var sim = new VerletJS(width, height, canvas);
		sim.friction = 1;
		var tire1 = sim.tire(new Vec2(200,50), 50, 30, 0.3, 0.9);

		// animation loop
		var loop = function() {
			sim.frame(16);
			sim.draw();
			requestAnimFrame(loop);
		};

		loop();
	};