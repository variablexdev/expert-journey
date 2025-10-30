// Script loaded check
console.log('Script loaded successfully!');

// Wax Seal Breaking Animation
function breakSeal() {
    console.log('Breaking seal...');
    alert('Seal clicked!'); // Temporary test
    const seal = document.querySelector('.wax-seal');
    if (seal) {
        seal.style.animation = 'sealBreak 1s ease-out forwards';
        
        setTimeout(() => {
            seal.style.display = 'none';
            const bookCover = document.getElementById('bookCover');
            if (bookCover) {
                bookCover.style.filter = 'none';
            }
        }, 1000);
    }
}

// Book Opening Animation
function openBook() {
    console.log('Opening book...');
    alert('Book button clicked!'); // Temporary test
    const bookCover = document.getElementById('bookCover');
    if (bookCover) {
        bookCover.style.animation = 'bookOpen 2s ease-out forwards';
        
        setTimeout(() => {
            bookCover.style.display = 'none';
            revealPages();
        }, 2000);
    }
}

// Reveal Pages with Stagger Effect
function revealPages() {
    const pages = document.querySelectorAll('.page-spread');
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('revealed');
            page.style.animation = 'pageReveal 1s ease-out forwards';
            page.style.opacity = '1';
        }, index * 500);
    });
    
    // Show secret message after all pages
    setTimeout(() => {
        const secretMessage = document.querySelector('.secret-message');
        if (secretMessage) {
            secretMessage.classList.add('revealed');
        }
    }, pages.length * 500 + 500);
    
    // Add blood stains after pages load
    setTimeout(addBloodStains, 1000);
}

// Add Dynamic Blood Stains
function addBloodStains() {
    const bloodStains = document.querySelectorAll('.blood-stain');
    bloodStains.forEach((stain, index) => {
        setTimeout(() => {
            stain.style.animation = 'bloodSplatter 0.5s ease-out forwards';
        }, index * 300);
    });
}

// Decrypt Message Function
function decryptMessage(element) {
    const encrypted = element.querySelector('.encrypted-text');
    const decrypted = element.querySelector('.decrypted-text');
    
    encrypted.style.animation = 'decrypt 2s ease-out forwards';
    
    setTimeout(() => {
        encrypted.style.display = 'none';
        decrypted.classList.remove('hidden');
        decrypted.style.animation = 'fadeInGlow 1s ease-out forwards';
    }, 2000);
}

// Photo Frame Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.photo-frame');
    
    frames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.animation = 'frameGlow 0.5s ease-out forwards';
            
            const scanLine = this.querySelector('.scan-line');
            if (scanLine) {
                scanLine.style.animation = 'scan 2s linear infinite';
            }
            
            const crosshair = this.querySelector('.crosshair');
            if (crosshair) {
                crosshair.style.animation = 'crosshairSpin 1s linear infinite';
            }
            
            const radar = this.querySelector('.radar-sweep');
            if (radar) {
                radar.style.animation = 'radarSweep 2s linear infinite';
            }
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.animation = 'frameNormal 0.5s ease-out forwards';
        });
    });
    
    // Add tilt effect to frames with data-tilt
    const tiltFrames = document.querySelectorAll('[data-tilt]');
    tiltFrames.forEach(frame => {
        frame.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
});

// Terminal Typing Animation
function startTerminalAnimation() {
    const command = document.querySelector('.typing-animation');
    const output = document.querySelector('.terminal-output');
    
    setTimeout(() => {
        output.style.animation = 'terminalType 3s steps(60) forwards';
    }, 2000);
}

// Easter Egg Activation
function activateEasterEgg() {
    const body = document.body;
    body.style.animation = 'matrixRain 5s ease-in-out';
    
    // Create matrix rain effect
    createMatrixRain();
    
    setTimeout(() => {
        body.style.animation = 'none';
    }, 5000);
}

function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.textContent = Math.random() > 0.5 ? '1' : '0';
        drop.style.cssText = `
            position: absolute;
            color: #00ff00;
            font-family: monospace;
            font-size: 14px;
            left: ${Math.random() * 100}%;
            animation: matrixDrop 3s linear infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        matrixContainer.appendChild(drop);
    }
    
    document.body.appendChild(matrixContainer);
    
    setTimeout(() => {
        document.body.removeChild(matrixContainer);
    }, 5000);
}

// Initialize animations on page load
window.addEventListener('load', function() {
    // Start terminal animation after a delay
    setTimeout(startTerminalAnimation, 3000);
    
    // Add floating particles
    createFloatingParticles();
});

function createFloatingParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(139, 69, 19, 0.6);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateSecretMode();
        konamiCode = [];
    }
});

function activateSecretMode() {
    document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
    
    const secretMessage = document.createElement('div');
    secretMessage.innerHTML = '🎉 SECRET ASSASSIN MODE ACTIVATED! 🎉';
    secretMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #ffd700;
        padding: 20px;
        border-radius: 10px;
        font-family: 'Cinzel', serif;
        font-size: 1.5rem;
        z-index: 10000;
        animation: secretReveal 3s ease-out forwards;
    `;
    
    document.body.appendChild(secretMessage);
    
    setTimeout(() => {
        document.body.removeChild(secretMessage);
        document.body.style.filter = 'none';
    }, 3000);
}// Image Mo
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// Prevent modal from closing when clicking on the image
document.getElementById('modalImage').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.querySelector('.modal-caption').addEventListener('click', function(event) {
    event.stopPropagation();
});
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});