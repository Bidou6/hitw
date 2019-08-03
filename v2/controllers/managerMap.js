var managerMap;

function managerMapController(){
    initializeManagerMap();
    var freeVolunteers=getFreeVolunteers();
    for(var i=0;i<freeVolunteers.length;i++){
        $("#freeVolunteers").append(freeVolunteers[i].firstname+" "+freeVolunteers[i].lastname+" <input type='checkbox' id='"+freeVolunteers[i].id+"' name='freeVolunteer' /><br>");
    }

    $("#btAttributeVolunteersToMission").on("click",function(){
        $("input:checkbox[name=freeVolunteer]:checked").each(function(){
            setVolunteerMission($(this).attr('id'),currentMissionId);
        });
        $.post("./php/write.php",{
            type:"writeVolunteers",
            json:volunteers
        });
    });
}

function initializeManagerMap(){
    //clé api
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzdGllbmgiLCJhIjoiY2p5dWwzNW0xMGV0ODNtcnJmOW5tN3B4ayJ9.VCExw9vlyrt9_AQ3v4wv8w';
    //création de l'objet map
    managerMap = new mapboxgl.Map({
        container: 'managerMapWrapper',//id du container
        style: 'mapbox://styles/mapbox/streets-v11',//style de la mpa
        center:[3.5119444444444445,50.6079444],//cordonnées ou on se trouve
        zoom:15.5//niveau de zoom sur la map
    });
}