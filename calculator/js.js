// Get the form, the note text input, and the note list elements
const noteForm = document.getElementById('note-form');
const noteText = document.getElementById('note-text');
const noteList = document.getElementById('note-list');

// Function to render the notes
function renderNotes() {
  // Clear the note list
noteList.innerHTML = '';

  // Retrieve notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

  // Loop through the notes array and create list items for each note
notes.forEach(function(note, index) {
    const noteItem = document.createElement('li');
    noteItem.style.fontWeight = '800';
    noteItem.style.fontSize = '35px';
    noteItem.style.color = 'gold';
    noteItem.innerText = note;
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.color = 'red';
    deleteButton.style.fontSize = '20px';
    deleteButton.style.fontWeight = '800';
    deleteButton.style.borderRadius = '20px';
    deleteButton.style.backgroundColor = 'black';
    deleteButton.style.width = '100px';
    deleteButton.style.height = '40px';
    deleteButton.style.border = 'none';
    deleteButton.style.transition = '0.4s';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('mouseover', () => {
        // Change the button's background color
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.color = 'black';
      });
      deleteButton.addEventListener('mouseout', () => {
        // Change the button's background color back to its original color
        deleteButton.style.backgroundColor = 'black';
        deleteButton.style.color = 'red';
      });
    // Add an event listener to the delete button to remove the note
    deleteButton.addEventListener('click', function() {
      // Remove the note from the notes array
    notes.splice(index, 1);
      // Save the updated notes in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
      // Re-render the notes
    renderNotes();
    });

    // Append the delete button to the note item
    noteItem.appendChild(deleteButton);

    // Append the note item to the note list
    noteList.appendChild(noteItem);
});
}

// Add event listener to the form when it is submitted
noteForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  // Get the value from the note text input
const noteValue = noteText.value;

  // Check if the note value is empty
if (noteValue.trim() === '') {
    return; // Exit the function if the note value is empty
}

  // Retrieve notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

  // Add the note to the notes array
notes.push(noteValue);

  // Save the updated notes in localStorage
localStorage.setItem('notes', JSON.stringify(notes));



  // Render the updated notes
renderNotes();
});

// Initial render of notes
renderNotes();