var childs,missions,posters,volunteers;


function loadDatas(cb){
        $.get('./db/childs.php',function(data){
            childs=data;
            $.get('./db/missions.php',function(data){
                missions=data;
                $.get('./db/posters.php',function(data){
                    posters=data;
                    $.get('./db/volunteers.php',function(data){
                        volunteers=data;
                        cb();
                    });
                });
            });
        });
}

function getDataById(json,id){
    var i=0;
    var data=null;
    while(!data && i<json.length){
        if(json[i].id===id){
            data=json[i];
        }
        i++;
    }
    return data;
}

function getMissionById(id){
    return getDataById(missions,id);
}

function getChildById(id){
    return getDataById(childs,id);
}

function getPosterById(id){
    return getDataById(posters,id);
}

function getVolunteersById(id){
    return getDataById(volunteers,id);
}

function getFreeVolunteers(){
    var freeVolunteers=[];
    for(var i=0;i<volunteers.length;i++){
        if(volunteers[i].currentMissionId===-1)freeVolunteers.push(volunteers[i]);
    }
    return freeVolunteers;
}

function setVolunteerMission(idVolunteer,idMission){
    var i=0,done=false;
    console.log(idVolunteer,idMission);
    console.log(volunteers);
    while(i<volunteers.length && !done){
        if(volunteers[i].id===idVolunteer){
            volunteers[i].currentMissionId=currentMissionId;
            done=true;
        }else{
            i++;
        }
    }
    console.log(volunteers);
}