$('document').ready(function()
{
    /**
     *fonction qui change la valeur du checkbox
     * @return : boolean
     */
    $('.rn-checkbox').change(function() {
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
        if ( $(this).is( ':checked' )) {
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
});



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
