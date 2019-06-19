import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min.js';

class StickyHeader {
	constructor() {

		this.homepagePortfolio = document.querySelector("#homepage-portfolio");
		this.siteHeader = document.getElementById("site-header");
		this.headerTrigger = this.homepagePortfolio.querySelectorAll(".trigger-header-element");
		this.createHeaderWaypoint()
	}

	createHeaderWaypoint() {
		var that = this;
		let waypointHeader = new Waypoint({
			element: this.headerTrigger[0],
		  handler: function(direction) {
		  	if (direction == "down") {
		  	that.siteHeader.classList.add("site-header--dark", "animated", "delay-.3s", "bounceInDown");
		  	} else {
					that.siteHeader.classList.remove("site-header--dark", "animated", "delay-.3s", "bounceInDown");
		  	}
		  }
		});
	}
}

export default StickyHeader;