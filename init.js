document.title = 'Emmaus Bible College Library';

$('#opacmainuserblock').load('/calyx/'+ host +'/main.html');

$('#libraryname').load('/calyx/'+ host +'/logo.html');

// load header
$('#members').after('<div id="calyx-header"></div>')
$('#calyx-header').load('/calyx/'+ host +'/header.html');

// load footer
$('.yui-t1 .ft').remove();
$('#bd').after('<div id="calyx-ft" class=".ft"></div>')
$('#calyx-ft').load('/calyx/'+ host +'/footer.html');


$('#opacnav').load('/calyx/'+ host +'/opacnav.html');


$("#opacnav").css({'font-size' : '80%'});


$(document).ready(function(){
if ($("#logout").length) {
    $("#moresearches").append("<span class=\"pipe\"> | </span><a href=\"http://www.calyx.net.au/media/EBCebsco.html\"target=\"_blank\" > EBSCO 
database </a>");
}});
$(document).ready(function(){
if ($("#logout").length) {
    $("#moresearches").append("<span class=\"pipe\"> | </span><a href=\"http://www.anztla.org/AriLogin.aspx \"target=\"_blank\" > ANZTLA 
Publication ARI (login: EBCL, pw: suamme) </a>");
}});

//Auto select branch
jQuery("select#select_library option[selected]").removeAttr("selected");
jQuery("select#select_library option[value='branch:MAIN']").attr("selected", "selected");

