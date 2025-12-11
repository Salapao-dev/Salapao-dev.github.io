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
            thumbnail.className = `w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                index === currentImageIndex 
                    ? 'border-green-400 ring-2 ring-green-400/50 opacity-100 shadow-lg shadow-green-500/50' 
                    : 'border-gray-700 opacity-60 hover:opacity-90 hover:border-gray-600'
            }`;
            
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

    // Matrix Rain Effect
    function initMatrixRain() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(15, 20, 25, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 35);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Interactive Terminal Commands
    function initTerminalCommands() {
        const terminal = document.querySelector('.terminal-body');
        if (!terminal) return;
        
        const commands = [
            { cmd: 'ls -la', output: 'portfolio/  skills/  experience/  contact/' }
        ];
        
        let commandIndex = 0;
        setInterval(() => {
            if (commandIndex < commands.length) {
                const command = commands[commandIndex];
                const prompt = document.createElement('div');
                prompt.className = 'code-line compile-line mt-2';
                prompt.innerHTML = `<span class="terminal-prompt"></span><span class="syntax-function">${command.cmd}</span><br><span class="command-output">${command.output}</span>`;
                terminal.appendChild(prompt);
                commandIndex++;
            }
        }, 3000);
    }
    
    // Code Typing Animation
    function initCodeTyping() {
        const codeBlocks = document.querySelectorAll('.code-line');
        codeBlocks.forEach((block, index) => {
            const originalText = block.textContent;
            block.textContent = '';
            block.style.opacity = '0';
            
            setTimeout(() => {
                block.style.opacity = '1';
                let charIndex = 0;
                const typingInterval = setInterval(() => {
                    if (charIndex < originalText.length) {
                        block.textContent += originalText[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 30);
            }, index * 200);
        });
    }
    
    // Glitch Effect on Hover
    function initGlitchEffect() {
        const glitchElements = document.querySelectorAll('h1, h2, h3');
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('glitch');
                setTimeout(() => {
                    element.classList.remove('glitch');
                }, 300);
            });
        });
    }
    
    // Interactive Code Blocks
    function initInteractiveCode() {
        const codeBlocks = document.querySelectorAll('.terminal-window, .code-bg');
        codeBlocks.forEach(block => {
            block.addEventListener('click', () => {
                block.classList.add('code-glow');
                setTimeout(() => {
                    block.classList.remove('code-glow');
                }, 1000);
            });
        });
    }
    
    // Terminal Loading Animation
    function showTerminalLoader(element) {
        const loader = document.createElement('span');
        loader.className = 'terminal-loader ml-2';
        element.appendChild(loader);
        return loader;
    }
    
    // Command Execution Simulation
    function simulateCommand(cmd, output, delay = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const terminal = document.querySelector('.terminal-body');
                if (terminal) {
                    const prompt = document.createElement('div');
                    prompt.className = 'code-line compile-line mt-2';
                    prompt.innerHTML = `<span class="terminal-prompt"></span><span class="syntax-function">${cmd}</span><br><span class="command-output">${output}</span>`;
                    terminal.appendChild(prompt);
                    terminal.scrollTop = terminal.scrollHeight;
                }
                resolve();
            }, delay);
        });
    }
    
    // Interactive Terminal
    function initInteractiveTerminal() {
        const terminalInput = document.getElementById('terminal-input');
        const terminalOutput = document.getElementById('interactive-terminal');
        
        if (!terminalInput || !terminalOutput) return;
        
        const commands = {
            help: () => {
                return `Available commands:
  ls              - List files
  cat [file]      - Display file contents
  whoami          - Show current user
  git status      - Show git status
  npm start       - Start development server
  clear           - Clear terminal
  about           - About me
  skills          - Show skills
  portfolio       - View portfolio
  contact         - Contact information
  matrix          - Enable matrix mode
  sudo rm -rf /   - Just kidding! 😄`;
            },
            ls: () => {
                return `portfolio/
skills/
experience/
contact/
README.md
package.json`;
            },
            cat: (file) => {
                const files = {
                    'README.md': `# Salapao-Dev Portfolio
Full Stack Developer | SAP Developer | Web Developer
Experience: 1 year 11 months
Location: Trang, Thailand`,
                    'package.json': `{
  "name": "salapao-dev-portfolio",
  "version": "1.0.0",
  "scripts": {
    "start": "npm run dev",
    "build": "npm run build",
    "test": "npm test"
  },
  "dependencies": {
    "passion": "100%",
    "coffee": "∞ cups"
  }
}`,
                    'skills.json': `{
  "languages": ["JavaScript", "PHP", "ABAP", "HTML", "CSS"],
  "frameworks": ["Laravel", "Bootstrap", "jQuery"],
  "tools": ["Git", "VS Code", "Postman"],
  "learning": ["Next.js", "React", "Node.js"]
}`
                };
                return files[file] || `cat: ${file}: No such file or directory`;
            },
            whoami: () => {
                return 'salapao-dev';
            },
            'git status': () => {
                return `On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean`;
            },
            'npm start': () => {
                return `> portfolio@1.0.0 start
> npm run dev

✓ Server running on http://localhost:3000
✓ Portfolio loaded successfully`;
            },
            clear: () => {
                terminalOutput.innerHTML = '<div class="text-sm font-mono"><span class="terminal-prompt"></span><span id="terminal-input" class="text-gray-100" contenteditable="true"></span><span class="cursor-blink inline-block w-2 h-4 bg-green-400 ml-1"></span></div>';
                document.getElementById('terminal-input').focus();
                return '';
            },
            about: () => {
                return `Watcharapong Kongjan
Full Stack Developer
Experience: 1 year 11 months
Passionate about creating solutions that solve real problems.`;
            },
            skills: () => {
                return `Frontend: JavaScript, HTML, CSS, Bootstrap, jQuery
Backend: PHP, Laravel, MySQL
SAP: ABAP, Interface, Smart Forms, Report, API
Tools: Git, VS Code, Postman`;
            },
            portfolio: () => {
                window.location.hash = '#portfolio';
                return 'Opening portfolio section...';
            },
            contact: () => {
                window.location.hash = '#contact';
                return 'Opening contact section...';
            },
            matrix: () => {
                const canvas = document.getElementById('matrix-canvas');
                if (canvas) {
                    canvas.style.opacity = canvas.style.opacity === '0.3' ? '0.1' : '0.3';
                }
                return 'Matrix mode toggled';
            }
        };
        
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = terminalInput.textContent.trim();
                const commandParts = command.split(' ');
                const cmd = commandParts[0];
                const args = commandParts.slice(1).join(' ');
                
                // Add command to output with animation
                const commandLine = document.createElement('div');
                commandLine.className = 'text-sm font-mono mb-1 command-execute';
                commandLine.innerHTML = `<span class="terminal-prompt"></span><span class="text-gray-100">${command}</span>`;
                terminalOutput.insertBefore(commandLine, terminalInput.parentElement);
                
                // Show loading indicator for some commands
                if (['npm start', 'git status', 'npm test'].includes(command)) {
                    const loader = showTerminalLoader(commandLine);
                    setTimeout(() => {
                        loader.remove();
                    }, 500);
                }
                
                // Execute command
                let output = '';
                const secretCommands = addSecretCommands();
                
                if (commands[command]) {
                    output = commands[command]();
                } else if (commands[cmd] && typeof commands[cmd] === 'function') {
                    output = commands[cmd](args);
                } else if (secretCommands[command]) {
                    output = secretCommands[command]();
                } else if (secretCommands[cmd] && typeof secretCommands[cmd] === 'function') {
                    output = secretCommands[cmd](args);
                } else {
                    output = `Command not found: ${cmd}. Type 'help' for available commands.`;
                }
                
                // Add output with animation
                if (output) {
                    const outputLine = document.createElement('div');
                    outputLine.className = 'text-sm font-mono mb-2 text-gray-300 terminal-response';
                    
                    // Color code output based on content
                    if (output.includes('✓') || output.includes('success')) {
                        outputLine.className += ' success-message';
                    } else if (output.includes('error') || output.includes('Error')) {
                        outputLine.className += ' error-message';
                    } else if (output.includes('warning') || output.includes('Warning')) {
                        outputLine.className += ' warning-message';
                    } else {
                        outputLine.className += ' command-output';
                    }
                    
                    outputLine.textContent = output;
                    terminalOutput.insertBefore(outputLine, terminalInput.parentElement);
                    
                    // Add compile success effect for certain commands
                    if (['npm start', 'npm test', 'npm run build'].includes(command)) {
                        outputLine.classList.add('compile-success');
                    }
                }
                
                // Clear input
                terminalInput.textContent = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
        
        terminalInput.focus();
    }
    
    // Keyboard Shortcuts
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K to focus terminal
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const terminalInput = document.getElementById('terminal-input');
                if (terminalInput) {
                    terminalInput.focus();
                }
            }
            
            // Konami Code Easter Egg
            const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
            window.konamiIndex = window.konamiIndex || 0;
            
            if (e.key === konamiCode[window.konamiIndex]) {
                window.konamiIndex++;
                if (window.konamiIndex === konamiCode.length) {
                    alert('🎮 Konami Code activated! You found the Easter egg!');
                    document.body.style.filter = 'hue-rotate(90deg)';
                    setTimeout(() => {
                        document.body.style.filter = '';
                    }, 3000);
                    window.konamiIndex = 0;
                }
            } else {
                window.konamiIndex = 0;
            }
        });
    }
    
    // Initialize all effects
    setTimeout(() => {
        initMatrixRain();
        initTerminalCommands();
        initGlitchEffect();
        initInteractiveCode();
        initInteractiveTerminal();
        initKeyboardShortcuts();
        
        // Simulate commands after page load
        // Removed to reduce terminal commands
    }, 500);

    // Loading Screen Animation
    function initLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const loadingStatus = document.getElementById('loading-status');
        
        if (!loadingScreen || !loadingStatus) return;
        
        const loadingSteps = [
            'Loading modules...',
            'Compiling assets...',
            'Initializing terminal...',
            'Loading portfolio data...',
            'Setting up matrix...',
            'Ready!'
        ];
        
        let stepIndex = 0;
        const stepInterval = setInterval(() => {
            if (stepIndex < loadingSteps.length) {
                loadingStatus.textContent = loadingSteps[stepIndex];
                stepIndex++;
            } else {
                clearInterval(stepInterval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.transition = 'opacity 0.5s ease-out';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 500);
            }
        }, 400);
    }
    
    // Particle Effect
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.id = 'particles-container';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = '#00ff41';
            particle.style.borderRadius = '50%';
            particle.style.opacity = '0.5';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            particlesContainer.appendChild(particle);
        }
    }
    
    // Animated Counter
    function animateCounter(elementId, target, duration = 2000) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // Initialize counters after page load
    function initCounters() {
        setTimeout(() => {
            animateCounter('exp-counter', 2);
            animateCounter('project-counter', 9);
            animateCounter('skill-counter', 20);
        }, 3000);
    }
    
    // Easter Egg - Secret Command
    function addSecretCommands() {
        const secretCommands = {
            'sudo rm -rf /': () => {
                return `rm: cannot remove '/': Permission denied
Just kidding! 😄 You're safe here.`;
            },
            'hack': () => {
                return `Accessing mainframe...
[████████████████████] 100%
Hack complete! Just kidding, this is a portfolio site. 😄`;
            },
            'coffee': () => {
                return `Brewing coffee...
☕ Coffee ready! Time to code!`;
            },
            'motivate': () => {
                const quotes = [
                    'Code is like humor. When you have to explain it, it\'s bad.',
                    'First, solve the problem. Then, write the code.',
                    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
                    'Programming isn\'t about what you know; it\'s about what you can figure out.'
                ];
                return quotes[Math.floor(Math.random() * quotes.length)];
            },
            'fortune': () => {
                return `Your fortune:
You will write bug-free code today!
(Probably not, but keep trying!) 😄`;
            }
        };
        
        return secretCommands;
    }
    
    // Initialize loading screen first
    initLoadingScreen();
    
    // Initialize particles after loading
    setTimeout(() => {
        createParticles();
        initCounters();
    }, 2500);

    // Scroll Progress Indicator
    function initScrollProgress() {
        const progressBar = document.getElementById('scroll-progress');
        if (!progressBar) return;
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Initialize scroll progress
    initScrollProgress();
    
    // Reveal animation on scroll
    const revealObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, revealObserverOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        revealObserver.observe(section);
    });

    console.log('%c╔═══════════════════════════════════════╗', 'color: #00ff41; font-family: monospace;');
    console.log('%c║   Welcome to the Matrix...            ║', 'color: #00ff41; font-family: monospace;');
    console.log('%c╚═══════════════════════════════════════╝', 'color: #00ff41; font-family: monospace;');
    console.log('%cSalapao-Dev Portfolio loaded successfully! 🚀', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cTry typing commands in the terminal!', 'color: #79c0ff; font-size: 14px;');
    console.log('%cPress Ctrl+K (or Cmd+K) to focus terminal', 'color: #ffa657; font-size: 12px;');
    console.log('%cTry the Konami Code for a surprise!', 'color: #d2a8ff; font-size: 12px;');
    console.log('%cType "help" in terminal for commands', 'color: #00ff41; font-size: 12px;');
    console.log('%cEaster eggs: Try "coffee", "motivate", "fortune", "hack"', 'color: #d2a8ff; font-size: 11px; font-style: italic;');
});

