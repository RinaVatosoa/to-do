$('document').ready(function()
{
    console.log("e");
    /*$( 'input.rn-checkbox' ).change(function() {
        var $input = $( this );
        $( '.val' ).text(
            "" + $input.is( ":checked" ) );
            
        })
        .change();*/

        

    var val = $(this);
    $.ajax({  
        type: "POST",  
        url: "view.php",  
        data: {val : val},  
        success: function(data){  
            console.log("v");
            $('.val').html(data);
        }  
    });

   /* $('.val').then(function(){
        if($('.val').text("true")){
            console.log("true");
            $('.task').css('text-decoration' , 'line-through');
        }
    });*/
   
});

$('.rn-checkbox').change(function(){
    $( '.val' ).text("0");
    if($(".rn-checkbox").prop('checked')){
        $(".rn-checkbox").attr('value', 'true');
        console.log("true");
        $( '.val' ).text("1");
        $('.task').css('text-decoration' , 'line-through');
    }else{
        $(".rn-checkbox").attr('value', 'false');
        $( '.val' ).text("0");
        $('.task').css('text-decoration' , 'none');
    }
});

$('.rn-search').keyup(function(){
    var txt = $(this).val();

    if( txt != '')
    {

    }else
    {
        $('.rn-result').html('');
        $.ajax({
            url : "search.php",
            method : "post",
            data : {search : txt},
            dataType : "text",
            success: function(data)
            {
                console.log("ao");
                $('.rn-result').html(data);
            }
        });
    }
});





