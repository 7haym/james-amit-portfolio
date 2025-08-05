document.addEventListener('DOMContentLoaded', function () {
            
    // --- Content Visibility Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.main-content-section');
    
    // Set the initial active link and section
    const initialTarget = navLinks[0].getAttribute('data-target');
    document.getElementById(initialTarget).classList.add('active');
    navLinks[0].classList.add('active');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
            updateNavLinkStatus(link);
        });
    });
    
    function showSection(targetId) {
        // Hide all sections first
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
        }
    }
    
    function updateNavLinkStatus(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }
    
    // --- Tab Functionality for Certificates & Resume ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-700', 'text-white');
                btn.classList.add('bg-card');
            });
            // Add 'active' to the clicked button
            button.classList.add('active', 'bg-blue-700', 'text-white');
            button.classList.remove('bg-card');
            
            // Hide all tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show the corresponding tab content
            const targetTabId = button.getAttribute('data-tab');
            const targetTab = document.getElementById(targetTabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    // --- Light/Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement;
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme from local storage or system preference
    if (currentTheme) {
        htmlTag.setAttribute('data-theme', currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlTag.setAttribute('data-theme', 'dark');
    }
    
    // Update the toggle icon based on the current theme
    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (htmlTag.getAttribute('data-theme') === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        const newTheme = htmlTag.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlTag.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon();
    });

    // --- Data Loading Simulations ---
    const projectList = document.getElementById('projectList');
    const projects = [
        {
            title: 'Project A: Employee Onboarding Module',
            description: 'Developed an interactive e-learning module that reduced new hire training time by 20%.',
            image: 'https://placehold.co/400x225/A0C8F0/003366?text=Module+Preview'
        },
        {
            title: 'Project B: Leadership Development Program',
            description: 'Designed a blended learning curriculum for emerging leaders, including workshops and coaching sessions.',
            image: 'https://placehold.co/400x225/CCDDFF/003366?text=Program+Overview'
        },
        {
            title: 'Project C: Software Simulation Training',
            description: 'Created a step-by-step simulation to train a sales team on a new CRM tool.',
            image: 'https://placehold.co/400x225/6699CC/FFFFFF?text=CRM+Training+Demo'
        }
    ];
    
    function renderProjects() {
        setTimeout(() => {
            if (projectList) {
                projectList.innerHTML = projects.map(project => `
                    <div class="project-item bg-card rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                        <img src="${project.image}" alt="Thumbnail for ${project.title}" class="w-full h-40 object-cover rounded-t-2xl" />
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-primary-color mb-2">${project.title}</h3>
                            <p class="text-secondary-color mb-4">${project.description}</p>
                            <a href="#" class="text-blue-400 font-semibold hover:underline flex items-center">
                                View Project <i class="fas fa-arrow-right ml-2 text-sm"></i>
                            </a>
                        </div>
                    </div>
                `).join('');
            }
        }, 1500); // Simulate a network delay
    }
    renderProjects();
    
    const certificateList = document.getElementById('certificateList');
    const certificates = [
        {
            title: 'Instructional Design Certificate',
            image: 'https://placehold.co/400x225/E0F2F1/004D40?text=ID+Cert',
            link: '#'
        },
        {
            title: 'Project Management Certification',
            image: 'https://placehold.co/400x225/FFF3E0/5D4037?text=PMP+Cert',
            link: '#'
        },
        {
            title: 'eLearning Development Badge',
            image: 'https://placehold.co/400x225/F0F4C3/33691E?text=eLearning+Badge',
            link: '#'
        }
    ];
    
    function renderCertificates() {
        setTimeout(() => {
            if (certificateList) {
                certificateList.innerHTML = certificates.map(cert => `
                    <div class="project-item bg-card rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                        <img src="${cert.image}" alt="Thumbnail for ${cert.title}" class="w-full h-40 object-cover rounded-t-2xl" />
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-primary-color mb-2">${cert.title}</h3>
                            <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="text-blue-400 font-semibold hover:underline flex items-center">
                                View Certificate <i class="fas fa-external-link-alt ml-2 text-sm"></i>
                            </a>
                        </div>
                    </div>
                `).join('');
            }
        }, 1500);
    }
    renderCertificates();
});
