function managerMissionsController(){

    for(var i=0;i<missions.length;i++){
        if(missions[i].status==="pending"){
            var child=getChildById(missions[i].childId);
            $("#missionsPanel").append("<h2>mission #"+missions[i].id+" : "+child.firstname +" " +child.lastname+"<h2>");

        }
    }
}