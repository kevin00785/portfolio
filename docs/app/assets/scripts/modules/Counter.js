import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min.js';
import counterUp from 'counterup2'

class Counter {
	constructor() {
		this.contentToCount = document.querySelector("#homepage-portfolio");
		this.counterElement = this.contentToCount.querySelectorAll( '.counter' );
		this.waypointsCounter();
	}

	waypointsCounter() {
		this.counterElement.forEach(function(currentItem) {
			let waypoint = new Waypoint({
				element: currentItem,
			  handler: function() {
			  	currentItem.classList.add("reveal-item--visible", "animated", "zoomIn")
			  	counterUp(currentItem, {
			  		duration: 2000,
				    delay: 20
				  })
			  	this.destroy()
		    },
		    offset: "75%"
			});
		});
	}
}

export default Counter;



