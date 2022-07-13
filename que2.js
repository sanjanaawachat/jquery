//que2

//
$("#btn").click(function(){
  
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/12',
      type: 'GET',
      success: function (data) {
       console.log(data);
      document.getElementsByTagName("h1")[0].innerText=data.title;
    },
  
    });
});
  
 