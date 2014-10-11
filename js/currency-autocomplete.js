$(function(){
	
	

  var currencies = [    
    { value: ' ', data: '' },
  ];

  var puntos;
  
  $.getJSON("192.168.0.10/dondeestaelaulayii/index.php/api/posts", function(data) {  
	   $.each(data, function(index, objetoDelListado)
	   {	
			alert(objetoDelListado.nombre);
			
			puntos={ value: objetoDelListado.nombre, data: objetoDelListado.id };
			currencies[currencies.length] = puntos;
	});  
	});
  
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      alert("tal cual");
    }
  });
  

});
