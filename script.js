// Pop-up permisi musik saat halaman dimuat
function showMusicPrompt() {
    Swal.fire({
        title: '🎵 Musik Latar',
        text: 'Mau nyalain musik background?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#477eff',
        cancelButtonColor: '#ff4757',
        confirmButtonText: 'Putar Musik',
        cancelButtonText: 'Nanti saja',
        background: '#fff0f3'
    }).then((result) => {
        if (result.isConfirmed) {
            audio.play().catch(error => {
                Swal.fire('Silahkan klik allow audio di browser! 🔈');
            });
            audioAllowed = true;
        }
    });
}

// Panggil pop-up musik saat halaman siap
window.addEventListener('DOMContentLoaded', () => {
    showMusicPrompt();
});

function createHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '💫';
    heart.className = 'hearts';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHearts, 300);

function showMessage() {
    Swal.fire({
        title: 'Thanks a lot!',
        text: 'Take care and wish u all the best syaa - Hanif',
        icon: 'success',
        confirmButtonText: 'Close',
        background: '#fff0f3',
        confirmButtonColor: '#477eff'
    });
}