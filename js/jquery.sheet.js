(function($) {

   $.fn.createSheet = function(options) {
      console.log('hello world!');
      console.log(this);

      var sheet = {};

      sheet.wrapper = $('.sheet-slide');

      sheet.settings = $.extend({
         location          :  'bottom',
         text              :  'this is the bottom sheet',
         color             :  null,
         backgroundColor   :  '#ffffff',
         fontStyle         :  null,
         exitable          :  true,
         exitButton        :  '<span class="close">X</span>',
         slideHeight       :  '100px'
      }, options);

      return this.each( function() {
         $(this).text( sheet.settings.text );

         sheet.wrapper.css({
            'display': 'none',
            'position': 'fixed',
            'bottom': '0',
            'width': '100%',
            'height': sheet.settings.slideHeight,
            backgroundColor: sheet.settings.backgroundColor
         })

         if ( sheet.settings.color ) {
            $(this).css( 'color', sheet.settings.color );
         }

         if ( sheet.settings.fontStyle ) {
            $(this).css( 'font-style', sheet.settings.fontStyle );
         }

         if ( sheet.settings.exitable ) {
            sheet.wrapper.append( sheet.settings.exitButton );
            $('.close').css({
               'position': 'absolute',
               'top': '20px',
               'right': '20px',
               'cursor': 'pointer',
               'font-size': '14px'
            })
         }

         sheet.wrapper.slideToggle();

         sheet.closeSheet = function() {
            console.log('close')
            sheet.wrapper.slideToggle();
         }

         sheet.wrapper.find('.close').on('click', sheet.closeSheet );
      });
   }

}(jQuery))