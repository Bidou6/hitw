var views=['roleSelection','managerMap','managerMissions','volunteersMap','volunteersMissions'];

function loadView(name){
    var indexView=views.indexOf(name);
    if(indexView>=0){
        $('#main').load('./views/'+name+'.html',function(){
            $.getScript('./controllers/'+name+'.js',function(){
                if(window[name+'Controller'])window[name+'Controller']();
            });
            
        });
    }
}