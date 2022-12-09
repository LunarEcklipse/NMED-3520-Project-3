

// Opens and closes items with the .expand-item-btn class.
$(document).ready(function(){ // TODO: This needs to be set so it expands the item associated with it rather than the button.
    $(".expand-item-btn").click(function(){
        console.log('clicked the button');
        var clickedBtnID = $(this).attr('id'); // Gets the ID of the clicked on button.
        var openableID = clickedBtnID.concat("-openable");
        console.log(clickedBtnID);
        console.log(openableID);
        $("#".concat(openableID)).slideToggle("fast");
        return false;
    })
})