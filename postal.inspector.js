var viewer = document.querySelector( ".viewer" );
var messages = document.getElementById( "messages" );
var $messages = $( messages );
var $logSize = $( "#log-size" );

var $details = $( ".details" );
var $dataPre = $( "#data-pre" );
var $envPre = $( "#envelope-pre" );

var method = "(function(){if(!window._postalWireTapMessages)return [];var messages = window._postalWireTapMessages; window._postalWireTapMessages = []; return messages; })();";
var height;

function atBottom() {
	height = viewer.clientHeight;
	var scrollHeight = viewer.scrollHeight;
	
	return scrollHeight === height || viewer.scrollTop + height + 10 >= scrollHeight;
}

var log = [];

function update () {
	var _atBottom = atBottom();
	chrome.devtools.inspectedWindow.eval( method, function ( data ) {
		if ( !data && !data.length) return;
		var last = data[ data.length - 1 ];
		data.forEach( function ( line ) {
			var isLast = line === last;
			var index = log.length;
			
			line = JSON.parse( line );
			log.push( line );

			var html = "<li data-index='" + index + "' class='" + (isLast ? 'break' : '') + "'><span class='channel'>" + line.env.channel + "</span><span class='topic'>" + line.env.topic + "</span></li>";
			$messages.append( html );
		});

		$logSize.text( log.length );


		if ( _atBottom ) {
			viewer.scrollTop = viewer.scrollHeight - height;
		}
	});
};

function select( log ) {
	if ( log === null ) {
		if ( prev ) {
			prev.removeClass( "selected" );
			prev = null;
		}

		$details.hide();
		return;
	}

	$dataPre.html( JSON.stringify( log.data, null, "  " ) );

	var envCopy = {};
	for ( var prop in log.env ) {
		if ( prop !== "data" ) {
			envCopy[ prop ] = log.env[ prop ];
		} else {
			envCopy.data = "...";
		}
	}

	$envPre.html( JSON.stringify( envCopy, null, "  " ) );

	$details.show();
};

function clear () {
	select( null );
	log.length = 0;
	$logSize.text( log.length );
	messages.innerHTML = "";
}

document.getElementById( 'refresh' ).addEventListener( "click", update, false );
document.getElementById( 'clear' ).addEventListener( "click", clear, false );

$( document ).on( "click", ".details .close", function () {
	select( null );
});

var prev;

$( messages ).on( "click", "li", function ( e ) {
	if ( prev ) {
		prev.removeClass( "selected" );
	}
	prev = $( e.currentTarget ).addClass( "selected" );
	var item = log[ parseInt( prev.data( "index" ), 10 ) ];
	select( item );
});


setInterval( update, 500 );

