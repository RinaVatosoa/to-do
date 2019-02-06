$('document').ready(function()
{
    $('.rn-checkbox').change(function(){
        var parent = $(this).parent().parent().parent();
        if($(this).prop('checked')){
            $(this).attr('value', 'true');
            $(parent).each(function () {
                var a = $(this).find('td').eq(3);
                $(a).html("fait");
            });
            $(parent).css('text-decoration' , 'line-through');
        }else{
            $(this).attr('value', 'false');
            $(parent).each(function () {
                var a = $(this).find('td').eq(3);
                $(a).html("Non fait");
            });
            $(parent).css('text-decoration' , 'none');
        }

        $('.id').each(function()
        {
            var id = this.id;
            console.log(id);
        });

        var newValue = $('.val')[2].innerHTML;
        console.log(newValue);

        $.ajax({
            type: "POST",
            url: "update.php",
            data: { val: newValue },
            cache: false,
            success: function( data ) {
                console.log(data);
                console.log("Data successfully updated " + newValue);
            }
        });
    });

    /*   var newValue = $('.val')[0].innerHTML;
        console.log(newValue);
        $.ajax({
            type: "POST",
            url: "update.php",
            data: { val: newValue , id: id},
            cache: false,
            success: function( data ) {
                console.log(data);
                console.log("Data successfully updated " + newValue);
            }
        });*/
});
