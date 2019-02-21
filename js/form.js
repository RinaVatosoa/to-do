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
    $('#todo-form').submit(function(event){
        event.preventDefault();

        /*var data, xhr;
        data = new FormData();
        data.append( 'task', $( '#task' ).val() );
        console.log(data);

        xhr = new XMLHttpRequest();
        xhr.open('POST', 'action.php', true);
        xhr.onload = function(){
            console.log(xhr.responseText);
        }
        xhr.send(data);  */

        var rn_task = $('#task').val();
        console.log(rn_task);

        $.ajax({
            url:"action.php",
            method:"POST",
            data: new FormData(this),
            cache : false,
            contentType: false,
            processData: false,
            success:function(data)
            {
                console.log(data);
                $("#todo-form")[0].reset();
                load_data();
            }
        })
    });
});

/*

xhr = new XMLHttpRequest();

        xhr.open( 'POST', 'action.php', true );
        xhr.onreadystatechange = function ( response ) {};
        xhr.send( data );

rn_task = $('#task').val();
 console.log(rn_task);
        console.log(data);

        if(rn_task != '')
        {
            $.ajax({
                url:"action.php",
                method:"POST",
                data:{ task : rn_task },
                cache : false,
                 contentType: 'multipart/form-data',
                 processData: false,
                success:function(data)
                {
                    console.log(data);

                    load_data();
                }
            })
        }
        else
        {
            alert("Both Fields are Required");
        }*/