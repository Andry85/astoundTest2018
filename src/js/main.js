$(document).ready(function(){




    /*********************************************************/
    /* start slider   */
    /********************************************************/
        $('.slider .owl-carousel').owlCarousel({
            nav: true,
            dots: false,
            responsiveClass:true,
            autoHeight:true,
            responsive:{
                0:{
                    items:1,
                    margin: 0
                },
                768:{
                    items: 3,
                    margin: 15,
                },
                992:{
                    items: 4,
                    margin: 10,
                }
            }
        });
    /*********************************************************/
    /* end slider  */
    /********************************************************/


    /*********************************************************/
    /* mobile nav   */
    /********************************************************/
        $('.menu').slicknav({
            label: ''
        });
    /*********************************************************/
    /* end mobile nav  */
    /********************************************************/

    mobileView();
    function mobileView() {
        
        var wiw = window.innerWidth;
        if(wiw < 768) {

           
        }
    };


 

   




    
    




});