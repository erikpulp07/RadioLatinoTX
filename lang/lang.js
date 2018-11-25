
      //lang = $("#ddlLang").val();
    var lang = 'ES';
    $( document ).ready(function() {
      	var objectsLang = $(".lang");
        var myItemsUS = {
						m1Title : {text : "Latino Radio TX"},
						m2Title : {text : "Online Magazine"},
						m1Body : {text : "Advertise here in our online radio, and get excelents results for your business!" +
                             "varied music, livestreaming in diferent schedules, music genres: " + 
                             "country, reguee, clasics, modern, etc. You can get announce your business with us for very" +
                             "low price and nice offerts"},
            m2Body : {text : "In our magazine we ofert"},
            WWA:{text: "Who we are?"},
            mission:{text: "Mission"},
            services:{text: "Services"},
            ContactUs:{text: "Contact Us"},
            titleContender:{text:"Online Radio - Magazine"},
            titleServices:{text:"Our Services"},
            titleMagazine:{text:"Latino Magazine"},
            titleWWA:{text:"Who we are?"},
            p1WWA:{text:"this is a test"},
            p2WWA:{text:"this is a test 2"},
            p3WWA:{text:"this is a test 3"},
            CloseModal:{text:"close"},
            titleMision:{text:"Mission"},
            pMission:{text:"this is the mission"},
            titleContact:{text:"Contact Us"},
            sendMessageButton:{text:"Send"},
            location:{text:"Location"},
            location1:{text:"Latino Magazine address <br> 5869 street"},
            location2:{text:"Social Media"},
            location3:{text:"<small>Copyright &copy; Latino Magazine 2018</small>"},
            contact_me : {text : "Contact me"},
            name : { text : "Name", placeholder: "Name", msg : "Please enter your name."},
            email : { text : "email", placeholder: "email", msg : "Please enter your email."},
            phone : { text : "phone", placeholder: "phone", msg : "Please enter your phone number."},
            message : { text : "message", placeholder: "message", msg : "Please enter a message."}
				};
        var myItemsES = {
            m1Title : {text : "Latino Radio TX"},
            m2Title : {text : "Online Magazine"},
            m1Body : {text : "Advertise here in our online radio, and get excelents results for your business!" +
                             "varied music, livestreaming in diferent schedules, music genres: " + 
                             "country, reguee, clasics, modern, etc. You can get announce your business with us for very" +
                             "low price and nice offerts"},
            m2Body : {text : "In our magazine we ofert"},
            WWA:{text: "Who we are?"},
            mission:{text: "Mission"},
            services:{text: "Services"},
            ContactUs:{text: "Contact Us"},
            titleContender:{text:"Online Radio - Magazine"},
            titleServices:{text:"Our Services"},
            titleMagazine:{text:"Latino Magazine"},
            titleWWA:{text:"Who we are?"},
            p1WWA:{text:"this is a test"},
            p2WWA:{text:"this is a test 2"},
            p3WWA:{text:"this is a test 3"},
            CloseModal:{text:"close"},
            titleMision:{text:"Mission"},
            pMission:{text:"this is the mission"},
            titleContact:{text:"Contact Us"},
            sendMessageButton:{text:"Send"},
            location:{text:"Location"},
            location1:{text:"Latino Magazine address <br> 5869 street"},
            location2:{text:"Social Media"},
            location3:{text:"<small>Copyright &copy; Latino Magazine 2018</small>"},
            contact_me : {text : "Contact me"},
            name : { text : "Name", placeholder: "Name", msg : "Please enter your name."},
            email : { text : "email", placeholder: "email", msg : "Please enter your email."},
            phone : { text : "phone", placeholder: "phone", msg : "Please enter your phone number."},
            message : { text : "message", placeholder: "message", msg : "Please enter a message."}
        };
    	//console.log(myItemsUS.nameContact.placeholder);
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
