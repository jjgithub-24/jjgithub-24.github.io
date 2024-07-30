// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offset = 30; // Adjust this value based on your header height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});

// Animated scrolling
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        animation: gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }),
        toggleActions: 'play none none reverse'
    });
});

// Multi-language greeting
const greetings = [
    "Hola, soy Jalen",
    "Bonjour, je suis Jalen",
    "Ciao, sono Jalen",
    "Hallo, ich bin Jalen",
    "こんにちは、ジェイレンです",
    "你好，我是Jalen",
    "Olá, eu sou Jalen",
    "Привет, я Джален",
    "Merhaba, ben Jalen",
    "Γεια, είμαι ο Jalen",
    "안녕하세요, 저는 Jalen입니다",
    "Hej, jag heter Jalen",
    "Hei, olen Jalen",
    "Salam, mən Jalen",
    "नमस्ते, मैं Jalen हूँ",
    "Salaam, main Jalen hoon",
    "Xin chào, tôi là Jalen",
    "Sawubona, ngingu-Jalen",
    "Hi, I'm Jalen"
];

let currentGreeting = 0;
const greetingElement = document.getElementById('greeting');

function changeGreeting() {
    gsap.to(greetingElement, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            currentGreeting = (currentGreeting + 1) % greetings.length;
            greetingElement.textContent = greetings[currentGreeting];
            gsap.to(greetingElement, {
                opacity: 1,
                duration: 0.5
            });
        }
    });
}

setInterval(changeGreeting, 3000);

// Navbar animation
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav ul li a');

nav.addEventListener('mouseenter', () => {
    gsap.to(nav, {
        scale: 1.05,
        duration: 0.3
    });
});

nav.addEventListener('mouseleave', () => {
    gsap.to(nav, {
        scale: 1,
        duration: 0.3
    });
});

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            y: -3,
            duration: 0.3
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            y: 0,
            duration: 0.3
        });
    });
});

const quotes = [
    '"The important thing is not to stop questioning." - Albert Einstein',
    '"I am become Death, the destroyer of worlds." - J. Robert Oppenheimer',
    '"Look deep into nature, and then you will understand everything better." - Albert Einstein',
    '"The scientist is not a person who gives the right answers, he\'s one who asks the right questions." - Claude Lévi-Strauss',
    '"Science is not only a disciple of reason but, also, one of romance and passion." - Stephen Hawking',
    '"The good thing about science is that it\'s true whether or not you believe in it." - Neil deGrasse Tyson',
    '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom." - Isaac Asimov',
    '"Science and everyday life cannot and should not be separated." - Rosalind Franklin',
    '"The science of today is the technology of tomorrow." - Edward Teller',
    '"The most beautiful thing we can experience is the mysterious. It is the source of all true art and science." - Albert Einstein',
    '"Science is organized knowledge. Wisdom is organized life." - Immanuel Kant',
    '"The art and science of asking questions is the source of all knowledge." - Thomas Berger',
    '"Science is the antidote to the poison of enthusiasm and superstition." - Adam Smith',
    '"The aim of science is not to open the door to infinite wisdom, but to set a limit to infinite error." - Bertolt Brecht',
    '"Science is the acceptance of what works and the rejection of what does not." - Jacob Bronowski',
    '"The whole of science is nothing more than a refinement of everyday thinking." - Albert Einstein',
    '"Science is not about why, it\'s about why not." - Cave Johnson (Portal 2)',
    '"The most exciting phrase to hear in science, the one that heralds new discoveries, is not \'Eureka!\' but \'That\'s funny...\'." - Isaac Asimov',
    '"In science, the credit goes to the man who convinces the world, not to the man to whom the idea first occurs." - Francis Darwin',
    '"Science is the antidote to the poison of enthusiasm and superstition." - Adam Smith',
    '"The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists." - Erwin Schrödinger',
    '"Science is simply common sense at its best." - Thomas Huxley',
    '"The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together." - Carl Sagan',
    '"Science is the process that takes us from confusion to understanding." - Brian Greene',
    '"The universe is under no obligation to make sense to you." - Neil deGrasse Tyson',
    '"We are just an advanced breed of monkeys on a minor planet of a very average star." - Stephen Hawking',
    '"Science is not only compatible with spirituality; it is a profound source of spirituality." - Carl Sagan',
    '"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge." - Stephen Hawking',
    '"In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual." - Galileo Galilei',
    '"Science is the poetry of reality." - Richard Dawkins',
    '"The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence." - Nikola Tesla',
    '"Science is magic that works." - Kurt Vonnegut',
    '"The most incomprehensible thing about the world is that it is comprehensible." - Albert Einstein',
    '"Science is the systematic classification of experience." - George Henry Lewes',
    '"The scientific man does not aim at an immediate result. He does not expect that his advanced ideas will be readily taken up." - Nikola Tesla',
    '"Science is the father of knowledge, but opinion breeds ignorance." - Hippocrates',
    '"The feeling of awed wonder that science can give us is one of the highest experiences of which the human psyche is capable." - Richard Dawkins',
    '"Science is the tool of the Western mind and with it more doors can be opened than with bare hands." - Carl Jung',
    '"The task is not so much to see what no one has yet seen; but to think what nobody has yet thought, about that which everybody sees." - Erwin Schrödinger',
    '"Science is nothing but perception." - Plato',
    '"The real science is in the understanding of the process, not in the achievement of the result." - Arthur C. Clarke',
    '"Science is the belief in the ignorance of experts." - Richard Feynman',
    '"The essence of science: ask an impertinent question, and you are on the way to a pertinent answer." - Jacob Bronowski',
    '"Science is the knowledge of consequences, and dependence of one fact upon another." - Thomas Hobbes',
    '"The job of the scientist is to listen carefully to nature, not to tell nature how to behave." - Freeman Dyson',
    '"Science is a way of thinking much more than it is a body of knowledge." - Carl Sagan',
    '"The scientist is not a person who gives the right answers, he\'s one who asks the right questions." - Claude Lévi-Strauss',
    '"Science never solves a problem without creating ten more." - George Bernard Shaw',
    '"The purpose of science is not to analyze or describe but to make useful models of the world." - Edward de Bono',
    '"Science is the captain, and practice the soldiers." - Leonardo da Vinci'
  ];

function createFloatingQuote() {
  const quoteElement = document.createElement('div');
  quoteElement.classList.add('quote');
  quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  
  const floatingQuotes = document.querySelector('.floating-quotes');
  floatingQuotes.appendChild(quoteElement);

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * window.innerHeight;

  gsap.fromTo(quoteElement, 
    { x: startX, y: startY, opacity: 0 },
    { 
      x: endX, 
      y: endY, 
      opacity: 1, 
      duration: 10, 
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(quoteElement, {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            quoteElement.remove();
            if (window.innerWidth > 768 || floatingQuotes.children.length < 2) { 
              createFloatingQuote();
            }
          }
        });
      }
    }
  );
}

function initFloatingQuotes() {
  const numQuotes = window.innerWidth > 768 ? 3 : 1;
  for (let i = 0; i < 3; i++) {
    setTimeout(() => createFloatingQuote(), i * 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    try {
      await emailjs.send("service_gcylffm", "template_0nnj16q", {
        from_name: data.name,
        from_email: data.email,
        message: data.message
      });

      confirmationMessage.classList.remove('hidden');
      contactForm.reset();

      setTimeout(() => {
        confirmationMessage.classList.add('hidden');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  });
});

document.addEventListener('DOMContentLoaded', initFloatingQuotes);

function animateBentoItems() {
  const bentoItems = document.querySelectorAll('.bento-item');
  
  bentoItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.1
    });
  });
}

function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
      gsap.from(item, {
          scrollTrigger: {
              trigger: item,
              start: 'top bottom-=100',
              end: 'bottom top+=100',
              toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.2
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animateBentoItems();
});

document.addEventListener('DOMContentLoaded', () => {
  const mainBox = document.querySelector('.bento-box.main');
  const subBoxes = document.querySelectorAll('.bento-box.sub');
  const loadingBorder = document.querySelector('.loading-border');
  let hoverTimeout;

  mainBox.addEventListener('mouseenter', () => {
    hoverTimeout = setTimeout(() => {
      gsap.to(mainBox, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          mainBox.style.display = 'none';
          gsap.fromTo(subBoxes, 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, display: 'block' }
          );
        }
      });
    }, 3000);

    gsap.to(loadingBorder, {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'linear'
    });
  });

  mainBox.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
    gsap.to(loadingBorder, {
      strokeDashoffset: '100%',
      duration: 0.3
    });
  });

  // Function to reset to the main box
  function resetToMainBox() {
    gsap.to(subBoxes, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      display: 'none',
      onComplete: () => {
        mainBox.style.display = 'block';
        gsap.to(mainBox, {
          scale: 1,
          opacity: 1,
          duration: 0.5
        });
      }
    });
  }

  // Add click event to reset when clicking outside the bento boxes
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.bento-container')) {
      resetToMainBox();
    }
  });
});

// Experience section hidden boxes
function setupExperienceSection() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const hiddenBoxesContent = {
        'lead-tutor': [
            { title: 'Publishing Student Stories', description: 'During the 2024 Summer Camp hosted by CIC, we helped student currate and illustrate their stories, which are being published in an anthology.' },
            { title: 'Innovative Teaching Method', description: 'Developed an effective method for learning the times tables, increasing student retention by +200%.' }
        ],
        'software-engineer': [
            { title: 'Portfolio Website', description: 'Leveraged AI to create a portfolio website that showcases my work and allows potential employers to easily navigate my projects.' },
            { title: 'Pantry Tracker', description: 'Work In Progress' },
            { title: 'AI Customer Support', description: 'Work In Progress' },
            { title: 'AI Flashcards & Stripe', description: 'Work In Progress' },
            { title: 'AI Rate My Professor', description: 'Work In Progress' }
        ],
        'ceo-researcher': [
            { title: 'Novel Tesla Coils', description: 'Theorizing and Developing Tesla Coils that can be used to transfer sustainable power to low-income areas.' },
        ]
    };

    function createHiddenBoxes(jobId, container) {
        container.innerHTML = '';
        hiddenBoxesContent[jobId].forEach(box => {
            const boxElement = document.createElement('div');
            boxElement.classList.add('hidden-box');
            boxElement.innerHTML = `
                <h4>${box.title}</h4>
                <p>${box.description}</p>
            `;
            container.appendChild(boxElement);
        });
    }

    function toggleHiddenBoxes(jobId, container) {
        const allContainers = document.querySelectorAll('.hidden-boxes-container');
        allContainers.forEach(cont => {
            if (cont !== container) {
                gsap.to(cont.children, {
                    y: 50,
                    opacity: 0,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: 'power3.in',
                    onComplete: () => {
                        cont.innerHTML = '';
                    }
                });
            }
        });

        if (container.children.length === 0) {
            createHiddenBoxes(jobId, container);
            gsap.fromTo(container.children, 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
            );
        } else {
            gsap.to(container.children, {
                y: 50,
                opacity: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power3.in',
                onComplete: () => {
                    container.innerHTML = '';
                }
            });
        }
    }

    timelineItems.forEach(item => {
        const jobId = item.getAttribute('data-job');
        const hiddenBoxesContainer = item.querySelector('.hidden-boxes-container');

        item.addEventListener('click', () => {
            toggleHiddenBoxes(jobId, hiddenBoxesContainer);
        });
    });
}

document.addEventListener('DOMContentLoaded', setupExperienceSection);

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
