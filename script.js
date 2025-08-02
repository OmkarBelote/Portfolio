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
    if (messageText.toLowerCase().includes("hello")) {
        botMessage.textContent = "Bot: Hi there! How can I help you?";}
    else if (messageText.toLowerCase().includes("hi")) {
            botMessage.textContent = "Bot: Hi there! How can I help you?";}  
    else if (messageText.toLowerCase().includes("contact")) {
        botMessage.textContent = "Bot: You can email me at omkarbelote@email.com.";} 
    else if (messageText.toLowerCase().includes("certificate")) {
        botMessage.innerHTML = `
            <strong>Here are my certificates:</strong> <br>
            <a href="TCS data visualization.png" target="_blank">📜 Certificate 1</a><br>
            <a href="certificate2.png" target="_blank">📜 Certificate 2</a><br>
            <a href="certificate3.png" target="_blank">📜 Certificate 3</a><br>`;} 
    else {
        botMessage.textContent = "Bot: Sorry, I don't understand that.";
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
  
  

