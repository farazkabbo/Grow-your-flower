// =============================================
// ENHANCED ANIMATED IMAGE CHANGER
// =============================================

// Array of all images to cycle through
const images = [
    './assets/image-content/image-1.png',
    './assets/image-content/image-2.png',
    './assets/image-content/image-3.png',
    './assets/image-content/image-4.png',
    './assets/image-content/image-5.png',
    './assets/image-content/image-6.png'
];

// Reference HTML elements
const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');
const buttonRipple = document.querySelector('.button-ripple');

// Track current image index
let currentIndex = 0;

// =============================================
// ENHANCED FLOATING HEARTS SYSTEM
// =============================================

function createFloatingHeart() {
    const heartsContainer = document.querySelector('.floating-hearts-container');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = Math.random() > 0.5 ? '💖' : '💝';
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration for variety
    heart.style.animationDuration = (10 + Math.random() * 10) + 's';
    
    // Random delay
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 20000);
}

// =============================================
// SPARKLE EFFECTS SYSTEM
// =============================================

function createSparkle() {
    const sparklesContainer = document.querySelector('.sparkles-container');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    
    // Random animation duration
    sparkle.style.animationDuration = (2 + Math.random() * 3) + 's';
    
    // Random delay
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    sparklesContainer.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 5000);
}

// =============================================
// ENHANCED IMAGE UPDATE FUNCTION
// =============================================

function updateImage() {
    // Add changing class for exit animation
    imageContent.classList.add('changing');
    
    // Create ripple effect on image
    createImageRipple();
    
    setTimeout(() => {
        // Preload next image
        const img = new Image();
        img.src = images[currentIndex];
        
        img.onload = () => {
            // Change to new image
            imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
            
            // Remove changing class and add loaded class
            imageContent.classList.remove('changing');
            imageContent.classList.add('loaded');
            
            // Remove loaded class after animation
            setTimeout(() => {
                imageContent.classList.remove('loaded');
            }, 600);
        };
    }, 300);
}

// =============================================
// BUTTON RIPPLE EFFECT
// =============================================

function createButtonRipple(event) {
    buttonRipple.classList.remove('active');
    
    // Force reflow to restart animation
    void buttonRipple.offsetWidth;
    
    buttonRipple.classList.add('active');
    
    setTimeout(() => {
        buttonRipple.classList.remove('active');
    }, 600);
}

// =============================================
// IMAGE RIPPLE EFFECT
// =============================================

function createImageRipple() {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255, 91, 112, 0.3)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple 0.8s ease-out';
    ripple.style.pointerEvents = 'none';
    
    imageContent.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 800);
}

// =============================================
// SCREEN SHAKE EFFECT
// =============================================

function shakeScreen() {
    const container = document.querySelector('.container');
    container.style.animation = 'none';
    
    // Force reflow
    void container.offsetWidth;
    
    container.style.animation = 'glow 4s ease-in-out infinite, pulse 2s ease-in-out infinite, wiggle 0.5s ease-in-out';
    
    setTimeout(() => {
        container.style.animation = 'glow 4s ease-in-out infinite, pulse 2s ease-in-out infinite';
    }, 500);
}

// =============================================
// CONFETTI EXPLOSION
// =============================================

function createConfetti() {
    const colors = ['#FF5B70', '#50AFC9', '#FFF7F4', '#9E0E2B'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / confettiCount;
            const velocity = 150 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            confetti.style.animation = `
                confettiFall 3s ease-out forwards
            `;
            
            // Add confetti fall keyframes dynamically
            if (!document.querySelector('#confetti-styles')) {
                const style = document.createElement('style');
                style.id = 'confetti-styles';
                style.textContent = `
                    @keyframes confettiFall {
                        to {
                            transform: translate(${vx}px, ${vy + 500}px) rotate(720deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 10);
    }
}

// =============================================
// SOUND EFFECTS (Visual feedback)
// =============================================

function createSoundWave() {
    const wave = document.createElement('div');
    wave.style.position = 'absolute';
    wave.style.top = '50%';
    wave.style.left = '50%';
    wave.style.width = '2px';
    wave.style.height = '2px';
    wave.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    wave.style.borderRadius = '50%';
    wave.style.transform = 'translate(-50%, -50%)';
    wave.style.animation = 'ripple 1s ease-out';
    wave.style.pointerEvents = 'none';
    
    mainButton.appendChild(wave);
    
    setTimeout(() => {
        if (wave.parentNode) {
            wave.parentNode.removeChild(wave);
        }
    }, 1000);
}

// =============================================
// ENHANCED FINAL MESSAGE DISPLAY
// =============================================

function showFinalMessage() {
    // Hide button with fade out
    mainButton.style.opacity = '0';
    mainButton.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        mainButton.style.display = 'none';
        
        // Show final message with enhanced animation
        finalMessage.classList.add('show');
        
        // Create confetti explosion
        createConfetti();
        
        // Shake screen for emphasis
        shakeScreen();
        
        // Add extra floating hearts for celebration
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 200);
        }
        
        // Add sparkle burst
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createSparkle();
            }, i * 100);
        }
        
        // Change background to celebration mode
        document.body.style.animation = 'gradientShift 2s ease infinite, rainbow 4s linear infinite';
        
    }, 300);
}

// =============================================
// INITIALIZATION AND EVENT LISTENERS
// =============================================

// Initialize the application
function init() {
    // Show first image when page loads
    updateImage();
    
    // Start floating hearts
    setInterval(createFloatingHeart, 3000);
    
    // Start sparkles
    setInterval(createSparkle, 2000);
    
    // Add button click event listener
    mainButton.addEventListener('click', handleButtonClick);
    
    // Add button hover effects
    mainButton.addEventListener('mouseenter', () => {
        createSoundWave();
    });
    
    // Add image hover effects
    imageContent.addEventListener('mouseenter', () => {
        imageContent.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    imageContent.addEventListener('mouseleave', () => {
        imageContent.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Add container click effect
    document.querySelector('.container').addEventListener('click', (e) => {
        if (e.target !== mainButton) {
            createImageRipple();
        }
    });
}

// =============================================
// MAIN BUTTON CLICK HANDLER
// =============================================

function handleButtonClick(event) {
    // Create button ripple effect
    createButtonRipple(event);
    
    // Create sound wave effect
    createSoundWave();
    
    // Go to next image
    currentIndex++;
    
    // Update image if not at the end
    if (currentIndex < images.length) {
        updateImage();
        
        // Update button text based on progress
        const buttonText = mainButton.querySelector('.button-text');
        const remainingImages = images.length - currentIndex;
        
        if (remainingImages === 1) {
            buttonText.textContent = 'One more! 💖';
        } else if (remainingImages === 2) {
            buttonText.textContent = 'Almost there! ✨';
        } else {
            buttonText.textContent = `${remainingImages} more! 🌟`;
        }
    }
    
    // Show final message when we reach the last image
    if (currentIndex === images.length - 1) {
        setTimeout(() => {
            showFinalMessage();
        }, 800);
    }
}

// =============================================
// START THE APPLICATION
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add some extra magic effects
window.addEventListener('load', () => {
    // Initial sparkle burst
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 150);
    }
    
    // Initial heart shower
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 500);
    }
});