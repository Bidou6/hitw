$(function(){
    $.getJSON('../v1/data/childs.json',function(data){
        /**
         * @zaidun
         */
            $('#childAge').text(data[0].age);
            $('#childAge').text(data[0].lastname);
            $('#childAge').text(data[0].firsname);
            $('#childAge').text(data[0].picture);
            $('#moreDetails').text(data[0].description);
            
         /**
          * end
          */
         
    });
})

