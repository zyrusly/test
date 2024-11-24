const ShowTemplate = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const template = document.getElementById('user-template');
    
        const cloned_template = template.content.cloneNode(true);
    
        const user_elements = document.querySelectorAll('.users-container');
    
        user_elements.forEach((element) => {
            const clone = cloned_template.cloneNode(true);
            const clone2 = cloned_template.cloneNode(true);
            element.appendChild(clone);
            element.appendChild(clone2);
        })
        CloseButton();
    })
}

const CloseButton = () => {
    document.querySelectorAll('.btn-close').forEach((btn) => {       
        btn.innerHTML = "&times;";
        btn.classList.add("btn-close");

        btn.addEventListener('click', () => {
            btn.parentElement.style.display = 'none';
        });
    });
};


ShowTemplate();