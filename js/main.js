// Main JavaScript for Salapao-Dev Portfolio
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Typed.js for hero section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'Software Developer',
                'Web Developer', 
                'SAP Developer',
                'Mobile Apps Developer',
                'IT Support',
                'Full Stack Developer'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
            // Update nav links color
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-gray-800');
            });
        } else {
            navbar.classList.remove('bg-white', 'shadow-lg');
            navbar.classList.add('bg-transparent');
            // Update nav links color
            navLinks.forEach(link => {
                link.classList.remove('text-gray-800');
                link.classList.add('text-white');
            });
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('text-primary-300'));
                if (navLink) navLink.classList.add('text-primary-300');
            }
        });
    });

    // Skills animation
    const skillBars = document.querySelectorAll('.skill-bar');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.transition = 'width 1.5s ease-in-out';
                    skillBar.style.width = width + '%';
                }, 200);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Portfolio filter functionality
    const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            portfolioFilterBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary-600', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            this.classList.add('active', 'bg-primary-600', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Portfolio item hover effects
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.absolute');
        const button = item.querySelector('button');
        
        if (overlay && button) {
            item.addEventListener('mouseenter', function() {
                overlay.style.opacity = '1';
                button.style.transform = 'scale(1)';
            });
            
            item.addEventListener('mouseleave', function() {
                overlay.style.opacity = '0';
                button.style.transform = 'scale(0)';
            });
        }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('กรุณากรอกอีเมลให้ถูกต้อง', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'กำลังส่ง...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;
        
        // Set notification content and styling based on type
        switch(type) {
            case 'success':
                notification.classList.add('bg-green-500', 'text-white');
                notification.innerHTML = `
                    <div class="flex items-center">
                        <i class="fas fa-check-circle mr-2"></i>
                        <span>${message}</span>
                    </div>
                `;
                break;
            case 'error':
                notification.classList.add('bg-red-500', 'text-white');
                notification.innerHTML = `
                    <div class="flex items-center">
                        <i class="fas fa-exclamation-circle mr-2"></i>
                        <span>${message}</span>
                    </div>
                `;
                break;
            default:
                notification.classList.add('bg-blue-500', 'text-white');
                notification.innerHTML = `
                    <div class="flex items-center">
                        <i class="fas fa-info-circle mr-2"></i>
                        <span>${message}</span>
                    </div>
                `;
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('home');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Add some interactive hover effects
    document.querySelectorAll('.service-item, .portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Image Modal functionality
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImages = document.getElementById('modalImages');
    const closeModal = document.getElementById('closeModal');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    
    let currentImageIndex = 0;
    let currentImages = [];
    
    // View more buttons functionality
    document.querySelectorAll('.view-more-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            try {
                const images = JSON.parse(this.getAttribute('data-images'));
                
                if (!Array.isArray(images) || images.length === 0) {
                    showNotification('ไม่มีรูปภาพเพิ่มเติม', 'error');
                    return;
                }
                
                // Set modal content
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                currentImages = images;
                currentImageIndex = 0;
                
                // Load first image
                loadImage(0);
                
                // Show modal
                imageModal.classList.remove('opacity-0', 'invisible');
                imageModal.classList.add('opacity-100', 'visible');
                
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
                
            } catch (error) {
                console.error('Error parsing images JSON:', error);
                showNotification('เกิดข้อผิดพลาดในการโหลดรูปภาพ', 'error');
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        hideModal();
    });
    
    // Close modal when clicking outside
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            hideModal();
        }
    });
    
    // Navigation buttons
    prevImage.addEventListener('click', function() {
        if (currentImages.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
            loadImage(currentImageIndex);
        }
    });
    
    nextImage.addEventListener('click', function() {
        if (currentImages.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
            loadImage(currentImageIndex);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (imageModal.classList.contains('visible')) {
            if (e.key === 'Escape') {
                hideModal();
            } else if (e.key === 'ArrowLeft') {
                prevImage.click();
            } else if (e.key === 'ArrowRight') {
                nextImage.click();
            }
        }
    });
    
        // Load image function
    function loadImage(index) {
        const img = new Image();
        
        // Show loading state
        modalImage.classList.add('loading');
        
        img.onload = function() {
            modalImage.src = currentImages[index];
            modalImage.alt = modalTitle.textContent;
            modalImage.classList.remove('loading');
            
            // Update thumbnail navigation
            updateThumbnails();
            
            // Update navigation buttons visibility
            prevImage.style.display = currentImages.length > 1 ? 'flex' : 'none';
            nextImage.style.display = currentImages.length > 1 ? 'flex' : 'none';
            
            // Hide thumbnails if only one image
            if (currentImages.length <= 1) {
                modalImages.style.display = 'none';
            } else {
                modalImages.style.display = 'flex';
            }
        };
        
        img.onerror = function() {
            modalImage.classList.remove('loading');
            showNotification('ไม่สามารถโหลดรูปภาพได้', 'error');
            hideModal();
        };
        
        img.src = currentImages[index];
    }
    
    // Update thumbnails
    function updateThumbnails() {
        modalImages.innerHTML = '';
        
        currentImages.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.className = `w-16 h-16 object-cover rounded cursor-pointer transition-all duration-300 ${index === currentImageIndex ? 'ring-2 ring-primary-500' : 'opacity-50 hover:opacity-75'}`;
            
            thumbnail.addEventListener('click', function() {
                currentImageIndex = index;
                loadImage(index);
            });
            
            modalImages.appendChild(thumbnail);
        });
    }
    
    // Hide modal function
    function hideModal() {
        imageModal.classList.add('opacity-0', 'invisible');
        imageModal.classList.remove('opacity-100', 'visible');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Clear modal content
        setTimeout(() => {
            modalImage.src = '';
            modalTitle.textContent = '';
            modalDescription.textContent = '';
            modalImages.innerHTML = '';
        }, 300);
    }

    console.log('Salapao-Dev Portfolio loaded successfully! 🚀');
});

