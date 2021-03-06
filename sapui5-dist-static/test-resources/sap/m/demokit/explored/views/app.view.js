sap.ui.jsview("views.app", {

	createContent : function (oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create split app
		return new sap.m.SplitApp("splitApp", {
			afterDetailNavigate: function () {
				this.hideMaster();
			}
		});
	}
});