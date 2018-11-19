
      //lang = $("#ddlLang").val();
    var lang = 'ES';
    $( document ).ready(function() {
      	var objectsLang = $(".lang");
        var myItemsUS = {
						modal1 : {text : "<h2>This is a test for the first modal</h2>"},
						modal2 : {text : "<h1>Test 2 for modal 2!!!</h1>"},
						modal3 : {text : "<h3>this the mother fu$$$ test 3</h3>"},
            contact_me : {text : "Contact me"},
            nameContact : { text : "Name", placeholder: "Name", msg : "Please enter your name."}
				};
        var myItemsES = {
            modal1 : {text :"<h2>Hola prueba modal 1</h2>"},
            modal2 : {text :"<h1>Esta es la modal 2!!!</h1>"},
            modal3 : {text :"<h3>aqui es el test 3</h3>"},
            contact_me : {text :"Contáctanos"},
            nameContact : { text : "Nombre", placeholder: "Nombre", msg : "Por favor ingrese su nombre."}
        };
    	console.log(myItemsUS.nameContact.placeholder);
      function langChange() {
          var myItems = null;
          if(lang.toUpperCase() == 'US'){
            myItems = myItemsUS;
          }
          else{
            myItems = myItemsES;
          }
          var Element;
          $(".lang").each(function( index ) {
  			  	Element = $( this );
  			  	$.each(myItems, function(id, val) {
              console.log(id);
              if(Element.attr('id') == id){
                console.log(Element);
              	Element.html(val.text);
                Element.attr("placeholder", val.placeholder);
                Element.attr("data-validation-required-message",val.msg);
            	}
          	});
  			 });
          
      }
        function makeDIV(elem,parent) {
            var html = [];
            html.push('<div class="collapse list-group-submenu" id="#' + parent + '"><div class="list-group panel">');
            $(elem).each(function() { html.push(makeA(this,parent)); });
            html.push('</div></div>');      
            return html.join("\n");
        }

        function makeA(elem,parent) {
            var html = [];
            if (elem.sub) {
                html.push('<a href="#' + elem.name + '" class="list-group-item collapsed" data-toggle="collapse" aria-expanded="true" data-parent="#' + parent + '">' + elem.name + '</a>');
                html.push(makeDIV(elem.sub,elem.name));
            } else {
                html.push('<a href="' + elem.link + '" class="list-group-item collapsed" data-toggle="collapse" aria-expanded="true" data-parent="#' + parent + '">' + elem.name + '</a>');
            }
            return html.join("\n");
        }

        $(".dropdown-menu li a").click(function(){
            var selText = $(this).text();
            lang = $(this).text();
            $(this).parents('.btn-group').find('.dropdown-toggle').html('<span class="flag-icon flag-icon-' + selText.toLowerCase() + '"><span class="caret"></span>').dropdown('toggle');
            $("#Menu").html(makeDIV(JSON.menu,"Menu"));
            console.log(lang);
            langChange();
           // $("#Menu").text('<span class="flag-icon flag-icon-' + $(this).text().toUpperCase() + '">');
         //   console.log('<span class="flag-icon flag-icon-' + $(this).text().toUpperCase() + '">' + $(this).html());
          //location.reload(true);
        })
  });
