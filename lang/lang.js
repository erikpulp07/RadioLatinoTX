
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
            p1WWA:{text:"We invited you to enjoy this edition of Latino Magazine, because we just started to add some new content" +
                        "just for you, so please enjoy it and let us know you thougts, and if you have any ideas or feel that someone" +
                        "need a litle of attention, contact us. we are very interesting in hear you"},
            p2WWA:{text:"We would like to take a time to be thanks all our clients for trust us and set their announcements in our magazine"+
                        "for the last 4 years, and we spect more years to come, thank you!"},
            p3WWA:{text:"As you may know Latino Magazine classifieds is a book dedicated to improve and increst the sales numbers of" +
                        "your bussines, through our services of marketing, those are elements help you to achive your targets in short and large term" +
                        " We've developed a full stragedy with all the marketing elements like print magazine, facebook announcements and our website" +
                        "If you buy a spot with us, we gonna put you through all our elements of marketing"},
            CloseModal:{text:"close"},
            titleMision:{text:"Mission"},
            pMission:{text:"We provide a high quality service in out station and magazine, giving you platform for big and small markets inside and outsite" +
                           "out borderlands. Using the last generation of tegnologies in the marketing industry, and making sure" +
                           "the quality of services in our transmitions and magazine for the satisfaction of our clients."},
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
