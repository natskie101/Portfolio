document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const storageType = localStorage; // Change to sessionStorage if you prefer session-only persistence
    
    // Load saved form data
    function loadFormData() {
        const savedData = storageType.getItem('contactFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            
            // Set form values
            form.querySelector('[name="name"]').value = formData.name || '';
            form.querySelector('[name="email"]').value = formData.email || '';
            form.querySelector('[name="message"]').value = formData.message || '';
            
            // Update character counters if they exist
            updateCharacterCounters();
        }
    }
    
    // Save form data
    function saveFormData() {
        const formData = {
            name: form.querySelector('[name="name"]').value,
            email: form.querySelector('[name="email"]').value,
            message: form.querySelector('[name="message"]').value
        };
        storageType.setItem('contactFormData', JSON.stringify(formData));
    }
    
    // Clear form data
    function clearFormData() {
        storageType.removeItem('contactFormData');
        updateCharacterCounters();
    }
    
    // Update character counters
    function updateCharacterCounters() {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.nextElementSibling && input.nextElementSibling.classList.contains('char-counter')) {
                const event = new Event('input', { bubbles: true });
                input.dispatchEvent(event);
            }
        });
    }
    
    // Initialize
    if (form) {
        // Add name attributes to your form elements if not already present
        form.querySelector('input[type="text"]').setAttribute('name', 'name');
        form.querySelector('input[type="email"]').setAttribute('name', 'email');
        form.querySelector('textarea').setAttribute('name', 'message');
        
        // Load saved data
        loadFormData();
        
        // Save on every input
        form.addEventListener('input', saveFormData);
        
        // Clear on successful submission
        form.addEventListener('submit', function() {
            setTimeout(clearFormData, 1000); // Small delay to ensure submission completes
        });
        
        // Optional: Add clear button functionality
        const clearBtn = document.createElement('button');
        clearBtn.type = 'button';
        clearBtn.className = 'btn btn-clear';
        clearBtn.textContent = 'Clear Form';
        clearBtn.addEventListener('click', function() {
            form.reset();
            clearFormData();
        });
        form.querySelector('.btn[type="submit"]').insertAdjacentElement('afterend', clearBtn);
    }
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! Wait for response later');
        this.reset();
    });
}