var port = chrome.extension.connect({
    name: "Postal Inspector" //Given a Name
});

window.addEventListener("message", function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
      return;

    if (event.data._postal === true ) {
    	port.postMessage(event.data);
    }
}, false);