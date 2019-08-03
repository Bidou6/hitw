function managerMissionsController(){

    for(var i=0;i<missions.length;i++){
        if(missions[i].status==="pending"){
            $("#missionsPanel").append("<h2>mission #"+missions[i].id+"<h2>");
        }
    }
}