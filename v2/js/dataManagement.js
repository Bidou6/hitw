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