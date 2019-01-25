$('.rn-btn').click(function()
{
    var rn_result = $('rn-task-input').val();
    document.getElementById("rn-result").innerHTML += rn_result + '<br/>';
    console.log("e");
});
$(document).ready(function()
{
    console.log("e");
});
$('.rn-checkbox').click(function()
{
    alert("checked");
});