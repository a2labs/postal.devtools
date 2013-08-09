console.log( "background loaded")

chrome.extension.onConnect.addListener(function (port) {
	if ( port.name === "Postal Inspector" ) {
		port.onMessage.addListener( function ( request, sender, sendResponse ) {
			// devPort.postMessage( request );
		});
	}
});


var devPort = chrome.runtime.connect({
    name: "Postal Inspector Dev" //Given a Name
});
