var currentMissionId=-1;

function managerMissionsController(){

    for(var i=0;i<missions.length;i++){
        if(missions[i].status==="pending"){
            var child=getChildById(missions[i].childId);
            $("#missionsPanel").append("<h2>mission #"+missions[i].id+" : "+child.firstname +" " +child.lastname+"<h2><button class='btAttributeMission' data-missionId='"+missions[i].id+"'>attribuer</button>");

        }
    }

    $(".btAttributeMission").on("click",function(){
        currentMissionId=$(this).attr('data-missionId');
        loadView('managerMap');
    });
}

function btAttributeMissionHandler(){

}