document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Product Management App",
            description: `• Built a Product Management App with Java Spring Boot, leveraging RESTful APIs for efficient client-server interactions.
                          • Optimized PostgreSQL database solutions for high-performance data management.
                          • Deployed on Tomcat server using Eclipse IDE, ensuring streamlined development and debugging.`,
        },
        {
            title: "Job Portal App",
            description: `• Developed a Job Listing App using React and Java Spring Boot, integrating Swagger APIs for seamless functionality.
                          • Managed MongoDB database for scalable and efficient data handling.
                          • Deployed on AWS cloud, utilizing Eclipse IDE for streamlined development.`,
        },
        {
            title: "Cinema App",
            description: `• Developed a Cinema App for movie search and filtering by categories and ratings, using React, Bootstrap, and HTML/CSS for the frontend.
                          • Created backend with Node.js and Express.js, implementing APIs for data interaction.
                          • Managed MongoDB with Mongoose for scalable and efficient database operations.`,
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = "p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded shadow transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate_animated animate_fadeInUp";

        const projectTitle = document.createElement('h3');
        projectTitle.className = "text-2xl font-bold text-white mb-2";
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.className = "text-white mb-2 whitespace-pre-line"; // Added whitespace-pre-line for new lines
        projectDescription.textContent = project.description;

        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectDescription);

        projectList.appendChild(projectItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Add animations to icons
    const icons = document.querySelectorAll('.icon-animate');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('animate-spin');
        });
        icon.addEventListener('mouseout', () => {
            icon.classList.remove('animate-spin');
        });
    });
});
