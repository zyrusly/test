const ShowTemplate = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const template = document.getElementById('user-template');
    
        const cloned_template = template.content.cloneNode(true);
    
        const user_elements = document.querySelectorAll('.users-container');
    
        user_elements.forEach((element) => {
            const clone = cloned_template.cloneNode(true);
            element.appendChild(clone);
        })
        CloseButton();
    })
}

const CloseButton = () => {
    const close_button = document.querySelector('.btn-close');

    close_button.innerHTML = "&times;";

    close_button.classList.add("btn-close");

    close_button.addEventListener('click', function() {
        const user_container = document.querySelector('.user-container');
        user_container.style.display = 'none';
    });
}

ShowTemplate();