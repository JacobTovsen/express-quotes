console.log( 'js' );

$(document).ready( onReady );

function onReady(){
    console.log( 'jq' );
    getQuotes();
}

function displayQuotes( quotes ){
    let el = $( '#quotesOut' );
    el.empty();
    for( let quote of quotes ){
        el.append( '<li>' + 'Quote: ' + quote.text + ' Author: ' + quote.author + '</li>');
    } //end for loop
} //end displayQuotes

function getQuotes(){
    console.log( 'in getQuotes' );
    //make AJAX GET call to server to retrieve guests
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then( function( response ){
        console.log( 'back from server with:', response );
        displayQuotes( response );
    }); //end ajax
} //end getQuotes