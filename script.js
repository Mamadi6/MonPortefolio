$(function(){
    $("*").hide();
    $("*").show(5000);

    $("#body").hide();
    
    $("#contexte").hide();
    $("#contexte").show(5000).css('font-size', '130px').slideDown();
    $("#contexte").css('position', 'relative');
    $("#contexte").css('background-image','url("/image/photoportefolio.png")');
    $("#contexte").css('background-size','cover');
    $("#contexte").css('background-repeat','no-repeat');
    $("#contexte").css('background-color', 'cyan');
    $("#contexte").css('color', 'white');
    $("#contexte").css('text-align', 'center');

    $("#non").click(function(){
        $("#oui").empty();
        $("#non").empty();
        $("#question").empty();
        $(this).text("AU REVOIR").css('font-size', '150px');

    });

    $("#oui").click(function(){
        $("#non").hide();
        $("#body").show();
        $("#contexte").remove();

    });

    $("#oui").on('click', function(e){
        e.preventDefault();
        $("#oui").empty();
        $("#non").empty();
        $("#question").empty();
        $("#body").show();

    })

    $("form").on('submit', function(){
        const nom = $("#nom").val().trim();
        const prenom = $("#prenom").val().trim();
        if(nom !== "" && prenom !== "") {
            $(this).find("input[name='subject']").val("Nouveau message de  " + nom + " " + prenom );
        }

    })














})