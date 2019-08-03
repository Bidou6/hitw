var childs,missions,posters,volunteers;


function loadDatas(cb){
        $.getJSON('./data/childs.json',function(data){
            childs=data;
            $.getJSON('./data/missions.json',function(data){
                missions=data;
                $.getJSON('./data/posters.json',function(data){
                    posters=data;
                    $.getJSON('./data/volunteers.json',function(data){
                        volunteers=data;
                        cb();
                    });
                });
            });
        });
}