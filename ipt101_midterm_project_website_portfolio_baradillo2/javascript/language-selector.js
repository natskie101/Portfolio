document.addEventListener('DOMContentLoaded', function() {
    
    const translations = {
        en: {
            title: "My Portfolio",
            home: "Home",
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            heroTitle: "Hi, I'm <span>Carlos Nath</span>",
            heroSubtitle: "A BSIT student",
            aboutTitle: "About Me",
            aboutHeading: "Who am I?",
            aboutText1: "I'm a dedicated BSIT student with a strong passion for web development. Over the past few years, I've been actively learning and building modern, responsive websites and web applications. While I focus mainly on front-end development, I also have hands-on experience with back-end technologies. I'm continuously improving my skills and staying updated with the latest trends in web development to prepare for a successful career in the tech industry.",
            aboutText2: "My journey in web development started when I was in 3rd year college, and since then I've worked with various projects for educational purposes.",
            nameLabel: "Name:",
            emailLabel: "Email:",
            skillsTitle: "My Skills",
            projectsTitle: "My Projects",
            project1Title: "Project One",
            project1Desc: "A responsive website built with HTML, CSS, and JavaScript.",
            project2Title: "Project Two",
            project2Desc: "An e-commerce platform with React.",
            contactTitle: "Contact Me",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitButton: "Submit",
            copyright: "© 2025 My Portfolio. All rights reserved."
        },
        fil: {
            title: "Ang Aking Portfolio",
            home: "Tahanan",
            about: "Tungkol Sa Akin",
            skills: "Kasanayan",
            projects: "Mga Proyekto",
            contact: "Kontak",
            heroTitle: "Kumusta, Ako si <span>Carlos Nath</span>",
            heroSubtitle: "Isang mag-aaral ng BSIT",
            aboutTitle: "Tungkol Sa Akin",
            aboutHeading: "Sino ako?",
            aboutText1: "Ako ay isang dedikadong mag-aaral ng BSIT na may malakas na pagmamahal sa web development. Sa nakaraang ilang taon, aktibo akong nag-aaral at gumagawa ng mga moderno at responsive na website at web application. Bagamat ang aking pokus ay sa front-end development, mayroon din akong karanasan sa back-end technologies. Patuloy kong pinapabuti ang aking mga kasanayan at nananatiling updated sa mga pinakabagong trend sa web development upang maghanda para sa isang matagumpay na karera sa tech industry.",
            aboutText2: "Ang aking paglalakbay sa web development ay nagsimula noong ako ay nasa ika-3 taon ng kolehiyo, at mula noon ay nakagawa na ako ng iba't ibang proyekto para sa layuning pang-edukasyon.",
            nameLabel: "Pangalan:",
            emailLabel: "Email:",
            skillsTitle: "Aking Mga Kasanayan",
            projectsTitle: "Aking Mga Proyekto",
            project1Title: "Proyekto Uno",
            project1Desc: "Isang responsive website na ginawa gamit ang HTML, CSS, at JavaScript.",
            project2Title: "Proyekto Dalawa",
            project2Desc: "Isang e-commerce platform na ginawa gamit ang React.",
            contactTitle: "Makipag-ugnayan Sa Akin",
            namePlaceholder: "Iyong Pangalan",
            emailPlaceholder: "Iyong Email",
            messagePlaceholder: "Iyong Mensahe",
            submitButton: "Ipasa",
            copyright: "© 2025 Ang Aking Portfolio. Lahat ng karapatan ay nakalaan."
        }
    };

    // Language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        
        // Update all elements with data-lang-key attribute
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active button
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Update html lang attribute
        document.documentElement.lang = lang;
    }

    // Button click event listeners
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
    }
});

