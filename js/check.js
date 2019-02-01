$('document').ready(function()
{
    console.log("e");
    $('.rn-checkbox').change(function(){
        $( '.val' ).text("0");
        if($(".rn-checkbox").prop('checked')){
            $(".rn-checkbox").attr('value', 'true');
            console.log("true");
            $( '.val' ).html("fait");
            $('.task').css('text-decoration' , 'line-through');
        }else{
            $(".rn-checkbox").attr('value', 'false');
            console.log("false");
            $( '.val' ).text("0");
            $('.task').css('text-decoration' , 'none');
        }
    });
});
