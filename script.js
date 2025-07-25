// === SEARCH FUNCTIONALITY ===

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const projectList = document.getElementById("projectList");

    // IMPORTANT: Replace these sample projects with your real ones.
    // Each object should contain at least a 'title' and a 'url' to its dedicated project page.
    const projects = [
        { title: "eLearning Module – Cybersecurity Basics", url: "portfolio/cybersecurity-elearning.html" },
        { title: "Workshop Facilitation – Team Building", url: "portfolio/team-building-workshop.html" },
        { title: "Instructional Video – Excel for Beginners", url: "portfolio/excel-for-beginners-video.html" },
        { title: "Microlearning – Soft Skills Coaching", url: "portfolio/soft-skills-microlearning.html" },
        { title: "Blended Learning Program – New Hire Onboarding", url: "portfolio/onboarding-program.html" },
        { title: "Needs Analysis & Design Document – Sales Training", url: "portfolio/sales-training-needs-analysis.html" }
        // Add more real projects here! Make sure the 'url' points to an actual HTML file
        // in your 'portfolio' folder (or wherever you structure them).
    ];

    // Function to render the project list
    function renderProjects(filteredProjects) {
        projectList.innerHTML = ""; // Clear old results

        if (filteredProjects.length === 0) {
            projectList.innerHTML = "<p><em>No projects found matching your search criteria. Try a different keyword.</em></p>";
            return;
        }

        filteredProjects.forEach(project => {
            const div = document.createElement("div");
            div.className = "project-item";
            
            // Create a link element for each project
            const link = document.createElement("a");
            link.href = project.url; // Link to the project's detail page
            link.textContent = project.title;
            
            div.appendChild(link);
            projectList.appendChild(div);
        });
    }

    // Show all projects on page load
    renderProjects(projects);

    // Filter projects as user types in the search input
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase().trim(); // Trim whitespace
        const filtered = projects.filter(project =>
            project.title.toLowerCase().includes(keyword)
        );
        renderProjects(filtered);
    });
});


// === Tab Switching for Certificates & Resume ===
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // Set initial active tab (from HTML or programmatically if needed)
    // You already have 'active' class on the first tab in HTML, so this is good.

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab"); // Get the ID of the content to show

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active to the clicked button and its corresponding content
            button.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});

// === NO VIDEO UPLOAD FUNCTIONALITY ===
// The previous video upload code has been removed.
// To showcase your teaching videos, embed them directly in index.html
// using <iframe> (for YouTube/Vimeo) or <video> tags (for self-hosted).
// Ensure your video files are in a publicly accessible location if self-hosting.