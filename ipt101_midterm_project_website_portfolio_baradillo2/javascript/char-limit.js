document.addEventListener('DOMContentLoaded', function() {
    const limitedInputs = document.querySelectorAll('input[maxlength], textarea[maxlength]');
    
    limitedInputs.forEach(input => {
        const maxLength = input.getAttribute('maxlength');
        const counter = input.nextElementSibling;
        counter.querySelector('.max').textContent = maxLength;
        
        // Update counter on input
        input.addEventListener('input', function() {
            const currentLength = this.value.length;
            const counter = this.nextElementSibling;
            counter.querySelector('.current').textContent = currentLength;
            
            // Add warning if limit reached
            if (currentLength >= maxLength) {
                counter.classList.add('limit-reached');
            } else {
                counter.classList.remove('limit-reached');
            }
        });
        
        // Initialize counter
        input.dispatchEvent(new Event('input'));
    });
});
