$(document).ready(function(){
    $(document).on('click', 'img', function(){
        var url ="https://www.anapioficeandfire.com/api/houses/";
        var num = $(this).attr('houseNum')
        url += (num + "/");
        $.get(url, function(res){
            $('#house_details').html(generateDetails(res));
        }, 'json')

    });
});

function generateDetails(res){
    var htmlString = "<legend>House Details</legend>" ;
    htmlString += "<p><span>Name</span>: ";
    htmlString += res.name + "<br><span>Words</span>: ";
    htmlString += res.words + "</p><p><br><br><span>Titles</span>: ";
    htmlString += res.titles +"</p>";
    return htmlString;
}