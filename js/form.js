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
                    alert(data);
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
});