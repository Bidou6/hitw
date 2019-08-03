var views=['roleSelection','managerMap','managerMissions','volunteersMap','volunteersMissions'];

function loadView(name){
    var indexView=views.indexOf(name);
    console.log(name,indexView)
    if(indexView>=0){
        $('#main').load('./views/'+name+'.html');
    }
    
}

loadView('roleSelection');