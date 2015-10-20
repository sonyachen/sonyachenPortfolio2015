/* Link animation scroll */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

/* Back to Top visibility */
$(window).scroll(function(){
    var offset = $(window).scrollTop();
    
    if(offset>1000){
        $('#back-to-top').fadeIn();
	}
	else {
	   $('#back-to-top').fadeOut();
    }
})

/* Skills Bar animation */
$(document).ready(function(){
    
    $.fn.isInViewport = function(containerSelector, partial) {
	var $element = this;
	
        if($element.length) {
            var el = $element[0];
            var rect = el.getBoundingClientRect();
            
            if(containerSelector && $(containerSelector).length) {
                var parentRect = $(containerSelector)[0].getBoundingClientRect();
            } else {
                var parentRect = {top: 0, left: 0, bottom: $(window).height(), right: $(window).width()};
            }
            
            if(partial) {
                return (
                    rect.left >= parentRect.left &&
                    rect.right <= parentRect.right &&
                    ( 
                    (rect.top >= parentRect.top && rect.top <= parentRect.bottom) ||
                    (rect.bottom >= parentRect.top && rect.bottom <= parentRect.bottom)
                    )
                );
            } else {
                return (
                    rect.top >= parentRect.top &&
                    rect.left >= parentRect.left &&
                    rect.bottom <= parentRect.bottom &&
                    rect.right <= parentRect.right
                );
            }
        }
    }
    
    $(window).scroll(function(){
        if($('.skillbar').isInViewport()){
             $('.skillbar').each(function(){
                var barWidth = $(this).find('.skillbar-percent')[0].innerHTML;
                $(this).find('.skillbar-bar').animate({
                    width: barWidth
                },2500);
            });
        }
    })
});

/* Email */
$(document).ready(function(){    
    var username = "sonyachennh";
    var hostname = "gmail.com";
    var linktext = username + "@" + hostname ;
    
    var code = "<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>"
    
    $('.contact-email')[0].innerHTML = code;
});