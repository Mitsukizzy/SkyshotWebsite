function selectTab( evt, tabName ) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName( "tabcontent" );
    for ( i = 0; i < tabcontent.length; i++ ) {
        tabcontent[i].style.display = "none";
        //tabcontent[i].slideUp();
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for ( i = 0; i < tablinks.length; i++ ) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    var selectedTab = document.getElementById( tabName );
    //selectedTab.slideToggle();
    selectedTab.style.display = "block";
    
    if ( tabName != "Default" ) {
        evt.currentTarget.className += " active";
    }
}

$(window).on("load", function() { // Waits for entire page to be ready, including images
    selectTab(event, 'Production');
    document.getElementsByClassName( "first-active" )[0].className += " active";
});