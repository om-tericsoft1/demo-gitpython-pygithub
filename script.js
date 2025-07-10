// Resume data and dynamic content generation
document.addEventListener('DOMContentLoaded', function() {
    // Skills data with proficiency levels
    const skills = [
        { name: 'Python', level: 90, color: 'bg-blue-500' },
        { name: 'Java', level: 85, color: 'bg-red-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 85, color: 'bg-indigo-500' },
        { name: 'MongoDB', level: 75, color: 'bg-green-600' },
        { name: 'AWS', level: 80, color: 'bg-yellow-500' },
        { name: 'Docker', level: 85, color: 'bg-blue-600' },
        { name: 'Kubernetes', level: 70, color: 'bg-purple-500' },
        { name: 'Redis', level: 75, color: 'bg-red-600' },
        { name: 'GraphQL', level: 70, color: 'bg-pink-500' }
    ];

    // Experience data
    const experience = [
        {
            title: 'Senior Backend Engineer',
            company: 'TechCorp Solutions',
            period: '2022 - Present',
            description: 'Leading backend development for high-traffic applications serving 1M+ users. Architected microservices infrastructure resulting in 40% improved performance.',
            achievements: [
                'Designed and implemented RESTful APIs handling 10K+ requests/minute',
                'Optimized database queries reducing response time by 60%',
                'Mentored junior developers and led code review processes'
            ]
        },
        {
            title: 'Backend Developer',
            company: 'StartupXYZ',
            period: '2020 - 2022',
            description: 'Developed scalable backend solutions for e-commerce platform. Built robust payment processing system and inventory management APIs.',
            achievements: [
                'Built payment gateway integration with 99.9% uptime',
                'Implemented caching strategies reducing server load by 50%',
                'Developed automated testing suite achieving 95% code coverage'
            ]
        },
        {
            title: 'Junior Software Engineer',
            company: 'DevCompany Inc.',
            period: '2019 - 2020',
            description: 'Contributed to various backend projects focusing on API development and database optimization.',
            achievements: [
                'Developed RESTful APIs for mobile applications',
                'Implemented data migration scripts for legacy systems',
                'Participated in agile development methodologies'
            ]
        }
    ];

    // Projects data
    const projects = [
        {
            title: 'E-commerce Microservices',
            tech: 'Python, FastAPI, PostgreSQL, Redis',
            description: 'Built scalable microservices architecture for e-commerce platform with automated deployment pipeline.',
            github: 'https://github.com/anandreddy/ecommerce-microservices'
        },
        {
            title: 'Real-time Analytics Dashboard',
            tech: 'Node.js, Socket.io, MongoDB, AWS',
            description: 'Developed real-time data processing system with WebSocket connections for live dashboard updates.',
            github: 'https://github.com/anandreddy/analytics-dashboard'
        },
        {
            title: 'API Gateway Service',
            tech: 'Go, Docker, Kubernetes, Consul',
            description: 'Created high-performance API gateway with load balancing, rate limiting, and service discovery.',
            github: 'https://github.com/anandreddy/api-gateway'
        },
        {
            title: 'Distributed Cache System',
            tech: 'Java, Spring Boot, Redis Cluster',
            description: 'Implemented distributed caching solution with automatic failover and data consistency.',
            github: 'https://github.com/anandreddy/distributed-cache'
        }
    ];

    // Populate skills with animated progress bars
    function populateSkills() {
        const skillsContainer = document.getElementById('skills-container');
        skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item print-no-break';
            skillElement.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-gray-700">${skill.name}</span>
                    <span class="text-sm text-gray-500">${skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="skill-bar ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out" 
                         style="width: 0%; animation-delay: ${index * 0.1}s;" 
                         data-width="${skill.level}%"></div>
                </div>
            `;
            skillsContainer.appendChild(skillElement);
        });

        // Animate skill bars
        setTimeout(() => {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }, 500);
    }

    // Populate experience section
    function populateExperience() {
        const experienceContainer = document.getElementById('experience-container');
        experience.forEach((exp, index) => {
            const expElement = document.createElement('div');
            expElement.className = 'border-l-4 border-blue-500 pl-6 pb-6 print-no-break';
            expElement.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 class="text-lg font-semibold text-gray-800">${exp.title}</h4>
                    <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">${exp.period}</span>
                </div>
                <p class="text-gray-600 font-medium mb-2">${exp.company}</p>
                <p class="text-gray-700 mb-3">${exp.description}</p>
                <ul class="space-y-1">
                    ${exp.achievements.map(achievement => 
                        `<li class="flex items-start">
                            <i class="fas fa-chevron-right text-blue-500 text-xs mt-1 mr-2"></i>
                            <span class="text-gray-700 text-sm">${achievement}</span>
                        </li>`
                    ).join('')}
                </ul>
            `;
            experienceContainer.appendChild(expElement);
        });
    }

    // Populate projects section
    function populateProjects() {
        const projectsContainer = document.getElementById('projects-container');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 print-no-break';
            projectElement.innerHTML = `
                <h4 class="font-semibold text-gray-800 mb-2">${project.title}</h4>
                <p class="text-sm text-blue-600 mb-2">${project.tech}</p>
                <p class="text-gray-700 text-sm mb-3">${project.description}</p>
                <a href="${project.github}" target="_blank" 
                   class="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <i class="fab fa-github mr-1"></i>
                    View on GitHub
                </a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }

    // Add smooth scrolling and intersection observer for animations
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-pulse');
                    setTimeout(() => {
                        entry.target.classList.remove('animate-pulse');
                    }, 1000);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.hover-lift').forEach(el => {
            observer.observe(el);
        });
    }

    // Enhanced print functionality with print-specific optimizations
    function setupPrintFunctionality() {
        // Add print styles dynamically for better browser compatibility
        const printStyles = document.createElement('style');
        printStyles.textContent = `
            @media print {
                /* Ensure skill bars are visible in print */
                .skill-bar {
                    width: var(--print-width) !important;
                }
            }
        `;
        document.head.appendChild(printStyles);

        // Set print-specific widths for skill bars
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            bar.style.setProperty('--print-width', bar.dataset.width);
        });

        // Add print event listeners
        window.addEventListener('beforeprint', () => {
            // Expand all content for print
            document.querySelectorAll('.skill-bar').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });

            // Remove any collapsed content
            document.querySelectorAll('.hidden').forEach(el => {
                el.classList.remove('hidden');
            });
        });

        window.addEventListener('afterprint', () => {
            // Restore interactive states after print
            console.log('Print job completed');
        });
    }

    // Initialize all functions
    populateSkills();
    populateExperience();
    populateProjects();
    addScrollAnimations();
    setupPrintFunctionality();

    // Add typing animation restart on scroll
    let typingAnimationPlayed = false;
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0 && !typingAnimationPlayed) {
            const typingElement = document.querySelector('.typing-animation');
            if (typingElement) {
                typingElement.style.animation = 'none';
                setTimeout(() => {
                    typingElement.style.animation = 'typing 3s steps(40, end), blink 0.75s step-end infinite';
                }, 100);
                typingAnimationPlayed = true;
            }
        }
    });
});

// Add responsive navigation for mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Add smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add download resume functionality
function downloadResume() {
    // This would integrate with a PDF generation service
    alert('Resume download functionality would be implemented here');
}

// Add form validation for contact form (if needed)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });

    return isValid;
}

// Enhanced print functionality
function printResume() {
    // Pre-print optimizations
    const originalTitle = document.title;
    document.title = 'Anand_Reddy_KS_Resume';
    
    // Trigger print
    window.print();
    
    // Restore original title
    document.title = originalTitle;
}

// Export functions for potential use in other modules
window.resumeApp = {
    toggleMobileMenu,
    scrollToSection,
    downloadResume,
    validateForm,
    printResume
};