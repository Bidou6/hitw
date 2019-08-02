$(function(){
    $.getJSON('../v1/data/childs.json',function(data){
        /**
         * @zaidun
         */
            $('#childAge').text( data.age) ;
            $('#childFirstname').text(data[0].lastname);
            $('#childLastname').text(data[0].firsname);
            $('#childAge').text(data[0].picture);
            $('#description').text(data[0].description);
            
         /**
          * @end
          */
         
    });
})

