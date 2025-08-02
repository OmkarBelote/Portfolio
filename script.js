// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.education-item, .certificate-card, .project-card');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
});

// scroll button for certificates

function scrollCertificates(direction) {
    const container = document.querySelector('.certificates-container');
    const scrollAmount = container.offsetWidth / 3; // Scroll by 1/3rd the container's width
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

//  scroll button for projects
function scrollProjects(direction) {
    const container = document.querySelector('.projects-container');
    const scrollAmount = container.offsetWidth / 3; // Scroll by half the container's width
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}


// Toggle Chatbot Visibility
function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = (chatbot.style.display === "flex") ? "none" : "flex";
}

// Send Message Function
function sendMessage() {
    var inputField = document.getElementById("chatInput");
    var messageText = inputField.value.trim();

    if (messageText === "") return;

    var messagesContainer = document.getElementById("chatbotMessages");

    // Add User Message
    var userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = "You: " + messageText;
    messagesContainer.appendChild(userMessage);

    // Auto-reply from Bot
    var botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");

    // Simple Response System
    if (messageText.toLowerCase().includes("hello") || messageText.toLowerCase().includes("hi")) {
        botMessage.textContent = "Hi there! How can I help you?";}
    else if (messageText.toLowerCase().includes("bye") || messageText.toLowerCase().includes("goodbye")) {
        botMessage.textContent = "Goodbye! Have a nice day👋";}   
    else if (messageText.toLowerCase().includes("contact")) {
        botMessage.textContent = "📩: omkarbelote@email.com, 📞: 9653646185";}
    else if (messageText.toLowerCase().includes("how are you")) {
        botMessage.textContent = "I'm just a bot, but I'm functioning perfectly! How about you?";}      
    else if (messageText.toLowerCase().includes("thank")) {
        botMessage.textContent = "You're welcome!😀 Is there anything else I can help with?";}
    else if (messageText.toLowerCase().includes("ok")) {
        botMessage.textContent = "Yes👍. Anything else?";}
    else if (messageText.toLowerCase().includes("fuck") || messageText.toLowerCase().includes("madarchod")|| messageText.toLowerCase().includes("behenchod")
    || messageText.toLowerCase().includes("bkl")|| messageText.toLowerCase().includes("mad")) {
        botMessage.textContent = "Be in your limits kiddo...Omkar knows better bad words than you.";}
    else if (messageText.toLowerCase().includes("certificate")) {
        botMessage.innerHTML = `
            <strong>My certificates:</strong><br>
            <a href="certificates/Python%20(SWAYAM).png" target="_blank">📜 Python Programming</a><br>
            <a href="certificates/Data analysis (Microsoft + Linkedin).png" target="_blank">📜 Data Analysis</a><br>
            <a href="certificates/Data Science.png" target="_blank">📜 Data Science</a><br>
            <a href="certificates/PowerBi (EDX).png" target="_blank">📜 Power BI</a><br>
            <a href="certificates/Data analytics and Databases on AWS (EDX).png" target="_blank">📜 Databases (AWS)</a><br>
            <a href="certificates/TCS data visualization.png" target="_blank">📜 TCS Forage</a><br>
            <a href="certificates/Git and Github.png" target="_blank">📜 Git & Github</a><br>
            <a href="certificates/NullClass-PowerBi-Training-Certificate.png" target="_blank">📜 Data Analyst Training</a><br>
            `;} 
    else {
        botMessage.textContent = "Sorry, I don't understand that.";
    }

    messagesContainer.appendChild(botMessage);

    // Scroll to the latest message
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Clear Input Field
    inputField.value = "";
}

// Enter Key to Send Message
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


// Theme 

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-button");
    const themeDropdown = document.querySelector(".theme-dropdown");
    const themeOptions = document.querySelector(".theme-options");
    const themeCircles = document.querySelectorAll(".theme-circle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.setAttribute("data-theme", savedTheme);
    }

    // Toggle dropdown visibility
    themeButton.addEventListener("click", () => {
        themeDropdown.classList.toggle("active");
    });

    // Apply selected theme
    themeCircles.forEach(circle => {
        circle.addEventListener("click", () => {
            const selectedTheme = circle.getAttribute("data-theme");
            body.setAttribute("data-theme", selectedTheme);
            localStorage.setItem("theme", selectedTheme);
            themeDropdown.classList.remove("active"); // Close dropdown after selection
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!themeDropdown.contains(event.target) && event.target !== themeButton) {
            themeDropdown.classList.remove("active");
        }
    });
});



// Mobile Navigation Toggle - Fixed Version
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
  
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
  
      // Optional: Close menu when link is clicked
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          toggleBtn.classList.remove("active");
          navLinks.classList.remove("active");
        });
      });
    }
  });
  
  

