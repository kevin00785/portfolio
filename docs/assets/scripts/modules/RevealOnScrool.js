import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min.js';

class RevealOnScrool {
	constructor(els, offset, cssClass) {
		this.contentToReveal = document.querySelector("#homepage-portfolio");
		this.itemToReveal = this.contentToReveal.querySelectorAll(els);
		this.hideInitially();
		this.offsetPourcentage = offset;
		this.currentClass = cssClass;
		this.createWaypoints();
	}

	hideInitially() {
		this.itemToReveal.forEach(function(userItem) {
			userItem.classList.add("reveal-item--hidden");
		});
	}

	createWaypoints() {
		var that = this;
		this.itemToReveal.forEach(function(currentItem) {
			let waypoint = new Waypoint({
				element: currentItem,
			  handler: function() {
			  	currentItem.classList.add("reveal-item--visible", "animated", that.currentClass);
				},
				offset: that.offsetPourcentage
			});
		});
	}

}

export default RevealOnScrool;