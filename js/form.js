$(document).ready(function(){
    load_data();
    $('#action').val("Insert");
    function load_data()
    {
        var action = "Load";
        $.ajax({
            url:"action.php",
            method:"POST",
            data:{action:action},
            success:function(data)
            {
                $('#task-table').html(data);
            }
        });
    }
    $('#todo-form').on('submit', function(event){
        event.preventDefault();
        var task = $('#task').val();

        if(task != '')
        {
            $.ajax({
                url:"action.php",
                method:"POST",
                data:new FormData(this),
                contentType:false,
                processData:false,
                success:function(data)
                {
                    console.log(data)
                    $('#todo-form')[0].reset();
                    load_data();
                }
            })
        }
        else
        {
            alert("Both Fields are Required");
        }
    });


    /*$('.rn-checkbox').click(function () {
        console.log("hehe");
    });

    $('.rn-checkbox').on('change',function(){
        console.log("ato");
        $( '.val' ).text("0");
        var task_id = $('.id').val;
        console.log(task_id);
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
    });*/
});