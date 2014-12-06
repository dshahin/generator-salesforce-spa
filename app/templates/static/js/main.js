$(document).ready(function(){
	
	Visualforce.remoting.Manager.invokeAction (
		$config.jsr.myFunction,
		'arg 1',
		'arg 2',
		function(result,event){
	 	if(event.status){
	 		$.myModule({backgroundColor:'lightgreen'});
			$.myModule({backgroundColor:'lightblue',selector: '#ready2', message: 'still ready'});
			$.myModule({backgroundColor:'lightyellow',selector: '#ready3', message: 'jsr mocks are go!'});
	 	}
	});
});
	