document.addEventListener('DOMContentLoaded', function() {
    let stars = document.querySelectorAll('.star');
    let emoji = document.getElementById('emoji');
    let emojiMap = ['😡', '😕', '😐', '🙂', '😄'];
    let emojiText = ['Angry', 'Sad', 'NotHappy', 'Neutral', 'Happy'];
    let feedbackTextEl = document.getElementById('feedback-text');

    stars.forEach(function(star, i) {
        star.addEventListener('click', function() {
            stars.forEach(function(s, j) {
                if (j <= i) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            emoji.textContent = emojiMap[i];
            feedbackTextEl.textContent = emojiText[i];
            emoji.style.transform = 'scale(1.1)';
            setTimeout(function() {
                emoji.style.transform = 'scale(1)';
            }, 200);
        });

        star.addEventListener('mouseover', function() {
            stars.forEach(function(s, j) {
                if (j <= i) {
                    s.style.color = '#ffd700';
                }
            });
        });

        // When mouse leaves the star area
        star.addEventListener('mouseout', function() {
            stars.forEach(function(s) {
                if (!s.classList.contains('active')) {
                    s.style.color = '#c5c5c5';
                }
            });
        });
    });
});