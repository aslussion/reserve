$("document").ready(function(){

  //form
  $('.phoneMask').livequery(function(){
        $(this).mask("+7 (999) 999-99-99");
    });
    $(".formAjax").livequery(function(){
      $(this).validate({
        rules:{},
        messages:'',
      });
    });

    var fancyPadd = [35,15,15,15];
    $(document).on('click', '.formAjax-button', function(){
      var form = $(this).closest('form');
        if(form.valid()){
          $.ajax({  
            type: 'GET',
            url: form.attr('action'),  
            data: form.serialize(), 
            success: function(html_res){
              if(html_res == 'success'){
                form.get(0).reset();
                //$.fancybox(formSucc);
                $.fancybox({content : formSucc,padding:fancyPadd});
              }
              else if(html_res == 'required'){
                $.fancybox(formReq);
              }

              else{
                $.fancybox(formErr);
              }
            },
          });
        }
        return false;
    });

    //fancybox
    $('.fancy').fancybox({padding:fancyPadd});

    $('.j-owlCarousel').owlCarousel({
                margin: 30,
                nav: true,/*prev next*/
                navText:false,//убрать текст кнопок вперед-назад
                loop: true,
                dots: false,
                //items:4,
                //autoplay:true,
                responsive: {//Адаптивность. Кол-во выводимых элементов при определенной ширине.
                  0: {
                    items: 2
                  },
                  768: {
                    items: 3
                  },
                  992: {
                    items: 4
                  }
                }
    });
    $('.j-owlCarouselSingle').owlCarousel({
      loop: true,
      items:1,
      //nav: true,
      navText:false,
      dots: false,
    });

});//end ready



