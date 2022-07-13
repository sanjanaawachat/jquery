//que1

//create the button ,onclick which you should be able to hide paragraph text,create another button onclick 
//ofwhich should paragraph should be visible

//ans:

$('#btn1').on('click',()=>{
    $('#heading').css('display','block');
})
$('#btn2').on('click',()=>{
    $('#heading').css('display','none');
})