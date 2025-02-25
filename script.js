//Example script.js
document.addEventListener('DOMContentLoaded', function() {
    const storyButtons = document.querySelectorAll('.story-button');

    storyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Story clicked!');
        });
    });
});