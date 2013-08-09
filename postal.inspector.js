var messages = document.getElementById( "messages" );

chrome.extension.onConnect.addListener(function (port) {
	if ( port.name === "Postal Inspector Dev" ) {
		port.onMessage.addListener( function ( request, sender, sendResponse ) {
			if ( request && request.env ) {
				var li = document.createElement( "li" );
				li.innerHTML = data.env.topic;
				messages.appendChild( li );
			}
		});
	}
});
