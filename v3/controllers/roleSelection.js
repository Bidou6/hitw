function roleSelectionController(){
    $("#btVolunteerSelect").on("click",function(){
        loadView('volunteersMissions');
    });

    $("#btManagerSelect").on("click",function(){
        loadView('managerMissions');
    });
}