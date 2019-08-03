$(function(){
    $.getJSON('../data/missions.json',function(data){
        /**
         * @zaidun
         */
            $('#childFirstname').text(data[0].lastname);
            $('#childLastname').text(data[0].firsname);
            $('#description').text(data[0].description);
            $("#childPicture").attr("src",data[0].picture);

            $('#childAge').text( data[0].age) ;
            $('#childSex').text(data[0].sex);
            $("#childHeight").text(data[0].size);
            $("#childWeight").text(data[0].weight); 
            
         /**
          * @end
          */
         
    });
})

