var World = {
	loaded: false,

	init: function initFn() {
		/* Disable all sensors in "IR-only" Worlds to save performance. If the property is set to true, any geo-related components (such as GeoObjects and ActionRanges) are active. If the property is set to false, any geo-related components will not be visible on the screen, and triggers will not fire.*/
		AR.context.services.sensors = false;
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		// this works for car1
		// this.tracker = new AR.Tracker("assets/car1.wtc");

		// this works for car2
		// this.tracker = new AR.Tracker("assets/car2.wtc");

		// when combined only car1 is tracked
		this.tracker = new AR.Tracker("assets/bothCars.wtc");


    var circle = new AR.Circle(0.5, {opacity : 0.5});

		var pageOne = new AR.Trackable2DObject(this.tracker, "car1", {
			drawables: {
				cam: circle
			}
		});

		var pageTwo = new AR.Trackable2DObject(this.tracker, "car2", {
			drawables: {
				cam: circle
			}
		});
	},


};

World.init();