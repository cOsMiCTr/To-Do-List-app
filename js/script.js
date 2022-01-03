
function newItem(){
    //1. Adding a new item to the list of items: 
    let  li = $('<li></li>'),
        crossOutButton = $('<crossOutButton></crossOutButton>'),
        inputValue = $('#input').val();

    // Controlling the input field
    (inputValue.length < 1) ? 
    $( "#input" ).submit( (event) => event.preventDefault()):
    $('#list').append(li.append(inputValue));

    // On double click, activate Strike CSS
    li.dblclick(() => li.toggleClass('strike'));

    // On click, delete list item
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    deleteListItem = () => li.addClass('delete');
    crossOutButton.on('click', deleteListItem);
}
// 4. Reordering the items: 
$('#list').sortable();


