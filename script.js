// constants - variables containing data that never changes
const URL = 'https://www.omdbapi.com';
const API_KEY = 'b4b63e65';

// state - variables containing data that DOES change and affects functionality

// cached element references
const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');
// event listeners
$form.on('submit', handleSubmit);

// functions
handleSubmit();

function handleSubmit(event) {
    event && event.preventDefault(); 

    const title = $input.val() || 'Frozen';
    
    if(!title) return; // immediately exit the function if no title provided
    
    const promise = $.ajax(`${URL}?apikey=${API_KEY}&t=${title}`);
    
    promise.then(
        function(data) {
            // success callback
            console.log('Data: ', data);
            render(data);
        }, 
        function(error) {
            // failure callback
            console.log('Error: ', error);
        }
        );
    }
    
    
function render(movieData) { // render means the process of visualizing data
    $main.html(`
        <h3>Title: ${movieData.Title}</h3>
        <img src="${movieData.Poster}" alt="${movieData.Title}" />
        <p>Year: ${movieData.Year}</p>
        <p>Rating: ${movieData.Rating}</p>
    `)
}    




// Promises in JavaScript
/*
    A Promise is an Object we receive in exchange 
    for the eventual success or failure of an asynchronous process

    Asynchronous: Two or more tasks running on different timelines

    Async programming allows us to keep a program running
    regardless if certain parts of that program need more time than others

*/