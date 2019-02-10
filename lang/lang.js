
      //lang = $("#ddlLang").val();
    var lang = 'ES';
    $( document ).ready(function() {
      	var objectsLang = $(".lang");
        var myItemsUS = {
						m1Title : {text : "Radio El Latino TX"},
            m2Title : {text : "El Latino Magazine"},
            m3Title : {text : "El Latino Magazine"},
            m4Title : {text : "Advertising Agency"},
            QuinceaneraTitle : {text:"Quinceañera Magazine"},
            JanuaryEdition: {text:"January 2019"},
            copiesFax:{text:"Copies and faxs"},
            printTitle:{text:"Prints"},
            EmailTitle:{text:"E-mail"},
            EmailText:{text:"Send pictures, documents or just check your inbox"},
            BannerText:{text:"a lot of sizes, designs and templates, wherever the size that you want and of course with great quality"},
            copiesFaxText:{text:"We have the fax and copies services in W/B & Color, great prices and good quality"},
            ScanText:{text:"You can scan your pictures and documents in diferents sizes"},
            cardsTitle:{text:"business cards"},
            cardsText:{text:"Fancy designs, funny and simples"},
            FlyersTitle:{text:"Flyers"},
            FlyersText:{text:"a lot of templates and designs fit to you"},
            BrochuresTitle:{text:"Brochures"},
            BrouchersText:{text:"Designs for your scholl, business, products..."},
            yardTitle:{text:"Yard signals"},
            yardText:{text:"Weather resistant with fading-resistant printing"},
            magneticTitle:{text:"Magnetic signals"},
            magneticText:{text:"Custom Magnetic signals with text on it, create your own signal that adapt to your needs"},
            serigrafiaTitle:{text:"<b>Serigrafia</b>"},
            serigrafiaText:{text:"Serigrafiamos con el logotipo de tu empresa  o imagen corporativa todo tipo de prendas y ropa laboral"},
            printersTitle:{text:"Prints, Fax services and more"},
            bannersTitle:{text:"Banners, Brochures and more"},
            signTitle:{text:"Yard Signs and more"},
            logoTitle:{text:"Logos"},
            logoText:{text:"create the inditity of your brand with the tools of corporative images and desing"},
            printText:{text:"wherever you want to print, any size and with great quality in W/B and colors"},
						m1Body : {text : "Advertise here in our online radio, and get excelents results for your business!" +
                             "varied music, livestreaming in diferent schedules, " + 
                             "You can get announce your business with us for very" +
                             "low price and nice offerts"},
            m2Body : {text : "Enjoy our lastest version of the Quinceañera Magazine clicking in the current date of the momth that you want" +
                              "If you want to be in our magazine just contact us through our contact form"},
            m3body : {text : "Enjoy our lastest version of El Latino Magazine clicking in the current date of the momth that you want" +
                            "If you want to be in our magazine just contact us through our contact form"},
            WWA:{text: "Who we are?"},
            mission:{text: "Mission"},
            services:{text: "Services"},
            ContactUs:{text: "Contact Us"},
            titleContender:{text:"Online Radio - Magazine"},
            titleServices:{text:"Our Services"},
            titleMagazine:{text:"El Latino Magazine"},
            titleWWA:{text:"Who we are?"},
            p1WWA:{text:"We invited you to enjoy this edition of El Latino, because we just started to add some new content" +
                        "just for you, so please enjoy it and let us know you thougts, and if you have any ideas or feel that someone" +
                        "need a litle of attention, contact us. we are very interesting in hear you"},
            p2WWA:{text:"We would like to take a time to be thanks all our clients for trust us and set their announcements in our advertising agency"+
                        "for the last 4 years, and we spect more years to come, thank you!"},
            p3WWA:{text:"As you may know El Latino advertising agency is a business dedicated to improve and increst the sales numbers of" +
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
            location1:{text:"El Latino Magazine address <br> 5869 street"},
            location2:{text:"Social Media"},
            location3:{text:"<small>Copyright &copy; El Latino Magazine 2018</small>"},
            contact_me : {text : "Contact me"},
            name : { text : "Name", placeholder: "Name", msg : "Please enter your name."},
            email : { text : "email", placeholder: "email", msg : "Please enter your email."},
            phone : { text : "phone", placeholder: "phone", msg : "Please enter your phone number."},
            message : { text : "message", placeholder: "message", msg : "Please enter a message."},
            oldestEd : {text:"Others editions"},
            currentEd : {text:"Current edition"},
            printsMore :{text: "Prints, fax services and more " },
            bannersMore :{text: "Banners, brochures and more "},
            yardSigns: {text: "Yard signs and more "},
				};
        var myItemsES = {
            m1Title : {text : "Radio El Latino TX"},
            m2Title : {text : "Revista Online"},
            m3Title : {text : "El Latino Magazine"},
            m4Title : {text : "Agencia de publicidad"},
            QuinceaneraTitle : {text:"Quinceañera Magazine"},
            JanuaryEdition: {text:"Enero 2019"},
            copiesFax:{text:"Copias y faxes"},
            printTitle:{text:"Impresiones"},
            EmailTitle:{text:"E-mail"},
            EmailText:{text:"Envia tus fotos, documentos o simplemete revisa tu e-mail"},
            BannerText:{text:"Variedad de diseños,plantillas, en el tamaño que desees siempre contando con la mejor calidad."},
            copiesFaxText:{text:"Contamos con servicio de Fax y Copias en B/N-color, precios accesibles y con la mejor calidad"},
            ScanText:{text:"Puedes scanear tus documentos, fotos en diferentes tamaños"},
            cardsTitle:{text:"<b>Tarjetas de presentación</b>"},
            cardsText:{text:"Diseños elegantes, divertidos, sencillos."},
            FlyersTitle:{text:"Flyers"},
            FlyersText:{text:"Variedad de plantillas y diseños a tu gusto."},
            BrochuresTitle:{text:"Brochures"},
            BrouchersText:{text:"Diseños para tu colegio, negocio, productos,etc"},
            yardTitle:{text:"<b>Señales de Patio</b>"},
            yardText:{text:"Resistente a la intemperie con impresión resistente a la decoloración"},
            magneticTitle:{text:"<b>Señal Magnética</b"},
            magneticText:{text:"Señales magnéticas personalizadas con texto. Crea tu mismo la señal que se adapte mejor a tus necesidades."},
            serigrafiaTitle:{text:"<b>Serigrafia</b>"},
            serigrafiaText:{text:"Serigrafiamos con el logotipo de tu empresa  o imagen corporativa todo tipo de prendas y ropa laboral"},
            printersTitle:{text:"Prints, Fax services y más"},
            bannersTitle:{text:"Banners, Brochures y más"},
            signTitle:{text:"Señales de patio y más"},
            logoTitle:{text:"Logos"},
            logoText:{text:"Desarrollamos la identidad de tu marca con herramientas de imagen corporativa y diseño"},
            printText:{text:"Lo que desees imprimir, en cualquier tamaño con la mejor calidad en B/N y a color."},
            m1Body : {text : "Anunciate en nuestra Radio Online y obten los mejores resultados en publicidad para tu Negocio! " +
                             "música variada, programación en vivo en diferentes horarios y  segmentos de música. " + 
                             "Puedes anunciar tu negocio con nosotros contamos con bajos costos y promociones. "},
            m2Body : {text : "Disfruta de nuestra mas reciente edición de La Quinceañera Magazine, dandole click a la fecha correpondiente del mes." + 
                             " Recuerda que si deseas estar en nuestra revista solamente debes de contactarnos a través de nuestro <a >formulario de contacto!</a>"},
            m3body : {text : "Disfruta de nuestra mas reciente edición de El Latino Magazine, dandole click a la fecha correpondiente del mes." +
                            "Recuerda que si deseas estar en nuestra revista solamente debes de contactarnos a través de nuestro <a >formulario de contacto!</a>"},
            WWA:{text: "¿Quienes somos?"},
            mission:{text: "Misión"},
            services:{text: "Servicios"},
            ContactUs:{text: "Contáctanos"},
            titleContender:{text:"Online Radio - Magazine"},
            titleServices:{text:"Nuestros Servicios"},
            titleMagazine:{text:"EL Latino Magazine"},
            titleWWA:{text:"¿Quienes Somos?"},
            p1WWA:{text:"Le invitamos a disfrutar de esta edición de El Latino, ya que empezaremos a añadir un poco de contenido " +
                        "aquí y allá para que usted disfrute, porfavor, haganos saber que opina, y si usted tiene una idea de la historia de alguien o siente que alguien merece un poco de atención, " +
                        "póngase en contacto con cualquiera de nosotros. ¡Esperamos con interés escuchar de usted!"},
            p2WWA:{text:"Nos gustaria tomar un poco de tiempo para agradecerle a nuestros clientes "+
                        "por poner sus anuncios en nuestra revista estos cuatro años y esperamos muchos años mas. Gracias!"},
            p3WWA:{text:"Como sabran, La agencia de publicidad El Latino es una agencia dedicada a mejorar e incrementar el volumen de ventas en su negocio, " +
                        "a través de nuestros servicios de comercialización, que son elementos que se complementan para el logro de sus objetivos a corto, mediano y largo plazo. " +
                        "Con nuestros elementos de mercadeo como : Revista física, página de Facebook, video en vivo en facebook live, Radio Latino Tx online, nuestro sitio web y otros. Si se anuncia con nosotros estara en todos nuestros elementos de mercadeo.."},
            CloseModal:{text:"Cerrar Ventana"},
            titleMision:{text:"Mision"},
            pMission:{text:"Proveer un servicio de alta calidad en nuestras emisora y revista, brindando una plataforma difusión para las pequeños y grandes empresas dentro y fuera de nuestras fronteras " +
                           "Haciendo uso de tecnología de última generación en la industria, y a la vez asegurando la estabilidad de nuestras transmisiones y la difusión de nuestra revista " +
                           "'El Latino Magazine' para la satisfacción de nuestros oyentes y clientes."},
            titleContact:{text:"Contáctanos"},
            sendMessageButton:{text:"Enviar"},
            location:{text:"Ubicacion"},
            location1:{text:"Dirección de El Latino Magazine  <br> Calle, 5869 no se"},
            location2:{text:"Redes Sociales!"},
            location3:{text:"<small>Copyright &copy; El Latino Magazine 2018</small>"},
            contact_me : {text : "Contact me"},
            name : { text : "Nombre", placeholder: "Nombre", msg : "Favor ingresa tu nombre."},
            email : { text : "email", placeholder: "email", msg : "Favor coloca un email."},
            phone : { text : "Telefono", placeholder: "Telefono", msg : "Favor coloca tu numero telefonico."},
            message : { text : "Mensaje", placeholder: "Mensaje", msg : "ingresa un mensaje."},
            oldestEd : { text:"Otras Ediciones"},
            oldestEd : {text:"Edición Actual"},
            printsMore :{text: "Impresiones, servicio de fax y más " },
            bannersMore :{text: "Banners, brochures y más"},
            yardSigns : {text: "Señales de patio y más"},
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
