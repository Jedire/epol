var result; 
function initCalc(){

    if($('input[name=NAI]:checked').val() == undefined){
        alert("Введите NAI");
        $('#number').val('');
    }
    if($('input[name=routing]:checked').val() == undefined){
        alert("Введите Routing");
        $('#number').val('');
    }
    if($('input[name=numbering_plan]:checked').val() == undefined){
        alert("Введите Numbering plan");
        $('#number').val('');
    }
    if($('input[name=presentation]:checked').val() == undefined){
        alert("Введите Presentation");
        $('#number').val('');
    }
    if($('input[name=screening]:checked').val() == undefined){
        alert("Введите Screening");
        $('#number').val('');
    }

    if($('#number').val()%2 == 0){
        $("#converted").val('H\'0');
    }
    else{
        $("#converted").val('H\'8');
    }

    result = $('input[name=routing]:checked').val() + $('input[name=numbering_plan]:checked').val() + $('input[name=presentation]:checked').val() + $('input[name=screening]:checked').val();
    result = parseInt(result, 2).toString(16);

    $("#converted").val($("#converted").val() + $('input[name=NAI]:checked').val() + result);

    if($('#number').val() == ""){
        $("#converted").val('');
    }
}

$('#number').on('input', function(){
    initCalc();
});

$('input[type=radio]').on('click change', function(e) {
    if($('#number').val() != ""){
        initCalc();
    }
});