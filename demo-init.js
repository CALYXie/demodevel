//add some html

$(document).ready(function(){

//alert('ddd');

// Helps with IE debugging.
function  getScript2 (url, callback) {
        var head    = document.getElementsByTagName("head")[0];
        var script  = document.createElement("script");
        var done    = false; // Handle Script loading

        script.src  = url;
        script.onload = script.onreadystatechange = function() { // 
Attach handlers for all browsers
            if ( !done && (!this.readyState || this.readyState === 
"loaded" || this.readyState === "complete") ) {
                done = true;
                if (callback) { callback(); }
                script.onload = script.onreadystatechange = null; // 
Handle memory leak in IE
            }
        };

        head.appendChild(script);
        return undefined; // We handle everything using the script 
element injection
    };
// -----------------------------------------


//alert(location.host);

var re = new RegExp('ebc');
if (location.host.match(re) ) { host = 'ebc' };
var re = new RegExp('emmaus.edu.au');
if (location.host.match(re) ) { host = 'ebc' };
var re = new RegExp('ausemm.calyx.net.au');
if (location.host.match(re) ) { host = 'ebc' };

// --------------------

var re = new RegExp('ebchaeng');
if (location.host.match(re) ) { host = 'ebchaeng' };

var re = new RegExp('library.tabornsw.edu.au');
if (location.host.match(re) ) { host = 'ebchaeng' };

var re = new RegExp('tcn');
if (location.host.match(re) ) { host = 'ebchaeng' };


// --------------------

var re = new RegExp('ebcsyd');
if (location.host.match(re) ) { host = 'ebckor' };

var re = new RegExp('kor.calyx.net.au');
if (location.host.match(re) ) { host = 'ebckor' };
var re = new RegExp('kor');
if (location.host.match(re) ) { host = 'ebckor' };

var re = new RegExp('koreanlibrary.scd.edu.au');
if (location.host.match(re) ) { host = 'ebckor' };

var re = new RegExp('scd.edu');
if (location.host.match(re) ) { host = 'ebckor' };

// --------------------
var re = new RegExp('mcm.kohaaloha.com');
if (location.host.match(re) ) { host = 'mcm' };

var re = new RegExp('library.mcm.qld.edu.au');
if (location.host.match(re) ) { host = 'mcm' };

var re = new RegExp('mcm.calyx.net.au');
if (location.host.match(re) ) { host = 'mcm' };

// --------------------



// create a dummy block to inject js
$("<div></div>").attr('id','calyx-js').appendTo('body');

getScript2('/calyx/' + host + '/init.js');



});

