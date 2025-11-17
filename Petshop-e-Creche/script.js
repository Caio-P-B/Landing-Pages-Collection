// Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');

        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
        });

        // Scroll to Section
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                nav.classList.remove('mobile-open');
            }
        }

        // Form Submission
        function handleSubmit(event) {
            event.preventDefault();
            
            const petName = document.getElementById('petName').value;
            const ownerName = document.getElementById('ownerName').value;
            const service = document.getElementById('service').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;

            console.log('Agendamento realizado:', {
                petName,
                ownerName,
                service,
                phone,
                date
            });

            // Reset form
            document.querySelector('.agendamento-form').reset();

            // Show success modal
            showModal();
        }

        // Modal Functions
        function showModal() {
            const modal = document.getElementById('successModal');
            modal.classList.add('show');
        }

        function closeModal() {
            const modal = document.getElementById('successModal');
            modal.classList.remove('show');
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('successModal');
            if (event.target === modal) {
                closeModal();
            }
        });

        // Add to Cart (simulated)
        function addToCart(productName) {
            alert(`${productName} adicionado ao carrinho!`);
        }

        // Set minimum date to today
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;