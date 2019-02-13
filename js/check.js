$('document').ready(function() {
    /**
     *fonction qui change la valeur du checkbox
     * @return : boolean
     */
    $('.rn-checkbox').change(function () {
        var parent = $(this).parent().parent().parent();
        if ($(this).prop('checked')) {
            $(this).attr('value', '1');
            $(parent).each(function () {
                var a = $(this).find('td').eq(3);
                $(a).html("Fait");
            });
            $(parent).css('text-decoration', 'line-through');
        } else {
            $(this).attr('value', '0');
            $(parent).each(function () {
                var a = $(this).find('td').eq(3);
                $(a).html("Non fait");
            });
            $(parent).css('text-decoration', 'none');
        }

        /**
         * renvoi la valeur du checkbox dans la base de deonnées
         */
        if ($(this).is(':checked')) {
            console.log("checked io");

            var newValue = $(this).val();

            $(parent).each(function () {
                var id = $(this).find('td').eq(1).text();

                $.ajax({
                    type: "POST",
                    url: "update.php",
                    data: {val: newValue, id: id},
                    cache: false,
                    success: function (data) {
                        console.log("Data successfully updated " + data);
                    }
                });
            });

        } else {

            var newValue = $(this).val();

            $(parent).each(function () {
                var id = $(this).find('td').eq(1).text();

                $.ajax({
                    type: "POST",
                    url: "update.php",
                    data: {val: newValue, id: id},
                    cache: false,
                    success: function (data) {
                        console.log("Data successfully updated " + data);
                    }
                });
            })
        }

    });

    /**
     * filtrer les tâches déjà fait
     * @params : rien
     * @return : String
     */
    $('td').ready(function(){
        var elems = $('td').filter(function(){
            return this.textContent.trim() === "Fait";
        }).parent().css('text-decoration', 'line-through');
        var elems1 = $('td').filter(function(){
            return this.textContent.trim() === "Fait";
        }).parent().find('.rn-checkbox').prop('checked', 1);
    });

});


   /* $('.val').change(function()
    {

    var parent = $(this).parent().parent().parent();
    if ($('.rn-checkbox').is(':checked')) {

        $(parent).each(function () {
            var a = $(this).find('td').eq(0);
            $(a).prop('checked', 1);
        });
        $(parent).css('text-decoration', 'line-through');
        $('td').css('text-decoration', 'line-through');
    } else {

        $(parent).each(function () {
            var a = $(this).find('td').eq(0);
            $(a).prop('checked', 0);
        });
        $(parent).css('text-decoration', 'none');
    }
    });*/
    //($('.val').val(1));
    /*if ($('.val').val(1))
    {

    $(this).parent().each(function () {
            var a = $(this).find("td").eq(0).val();
            $(a).prop('checked', 1);
        });
        $(this).parent().each(function () {
            var b = $(this).find('td');
            $(b).css('text-decoration', 'line-through');
        });
    }
    else {
        $('.rn-checkbox').prop('checked', 0);

        $('td').css('text-decoration', 'none');
    }

});*/

/*
  if ( $('.val').html('Fait') )
    {
        var parent = $(this).parent().parent().parent();
        console.log(parent);
        $(parent).each(function () {
            var b = $(this).find('td').eq(3);
            console.log(b);
        });
        $(parent).css( 'text-decoration' , 'line-through');
    } else
    {
        var parent = $(this).parent().parent();
        $(parent).css( 'text-decoration' , 'none');
    }
 */
        /**
         * renvoi la valeur du checkbox dans la base de deonnées
         */
        /*if ( $(this).is( ':checked' )) {
            console.log( "checked io");

            var newValue = $(this).val();
            console.log(newValue);

            $(parent).each(function () {
                var id = $(this).find('td').eq(1).text();

                $.ajax({
                    type: "POST",
                    url: "update.php",
                    data: {val: newValue , id : id},
                    cache: false,
                    success: function (data) {
                        console.log("Data successfully updated " + data);
                    }
                });
            });
            $(parent).css('text-decoration', 'line-through');

        } else {
            console.log("tsy checked io");

            var newValue = $(this).val();

            $(parent).each(function () {
                var id = $(this).find('td').eq(1).text();

                $.ajax({
                    type: "POST",
                    url: "update.php",
                    data: {val: newValue, id: id},
                    cache: false,
                    success: function (data) {
                        console.log("Data successfully updated " + data);
                    }
                });
            })
        }

    });
});*/

    /*
   * $(".item_post").on('click', function() {
   *   $('.classe').hide();
   * }
   * */

    /*if ($(this).is(':checked')) {
        var id = $('.id').val();
        console.log(id);
        var newValue = $('.val').val();
        console.log(newValue)

        $.ajax({
            type: "POST",
            url: "update.php",
            data: {val: newValue , id : id},
            cache: false,
            success: function (data) {
                console.log("Data successfully updated " + data);
            }
        });
    }
})*/

    /*$(parent).each(function () {
        var newValue = $(this).find('td').eq(3);
    console.log(newValue);

    $(parent).each(function () {

        var id =  $(this).find('td').eq(1);
        console.log(id);

        $.ajax({
            type: "POST",
            url: "update.php",
            data: {val: newValue},
            cache: false,
            success: function (data) {
                console.log("Data successfully updated " + data);
            }
        });
    });
});
});*/
       /* var newValue = $('.val')[0].innerHTML;
        console.log(newValue);
        $.ajax({
            type: "POST",
            url: "update.php",
            data: {val: newValue},
            cache: false,
            success: function (data) {
                console.log(data);
                console.log("Data successfully updated " + newValue);
            }
        });
    });*/
