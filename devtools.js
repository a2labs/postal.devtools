chrome.devtools.panels.create(
	"Postal.js",
	"devtools-icon.png",
	"postal.inspector.html",
	function(panel) {
		panel.createSidebarPane("Font Properties",
		    function(sidebar) {
		      sidebar.setPage("sidebar.html");
		      sidebar.setHeight("8ex");
		    });
	}
);