$(function(){
    $.getJSON('../v1/data/childs.json',function(data){
        /**
         * @author : zaidun
         */
            $('#childAge').text(data[0].age);
            $('#childAge').text(data[0].age);
            $('#childAge').text(data[0].age);
            }
         /**
          * en
          */
    });
})

