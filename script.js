async function loadPartials(partialPath) {
    leJSON = undefined
    await $.getJSON(partialPath, function(json) {
    leJSON = json
    });

    for (i = 0; i < document.getElementsByClassName("navbar-insert").length; i++) document.getElementsByClassName("navbar-insert")[i].innerHTML = leJSON.navbar;
    //for (i = 0; i < document.getElementsByClassName("footer").length; i++) document.getElementsByClassName("footer")[i] = leJSON.footer;
}
