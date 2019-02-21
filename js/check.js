$(document).ready(function() {
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
