const audio = document.getElementById('myAudio');
        let audioAllowed = false;

        function showMusicPrompt() {
            Swal.fire({
                title: '🎵 Background Music',
                text: 'don\'t forget to turn on the music syaa! 🎶',
                showCancelButton: true,
                confirmButtonColor: '#477eff',
                cancelButtonColor: '#ff4757',
                confirmButtonText: 'Okayy',
                cancelButtonText: 'No',
                background: '#fff',
                customClass: 'custom-swal',
                imageUrl: 'https://smojochatbot.blob.core.windows.net/rich-brian/music-disc.png',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Cute music note'
            }).then((result) => {
                if (result.isConfirmed) {
                    audio.play().catch(error => {
                        Swal.fire('Please allow audio in your browser 🔈');
                    });
                    audioAllowed = true;
                }
            });
        }

        window.addEventListener('DOMContentLoaded', () => {
            showMusicPrompt();
            createConfetti();
        });

        function createConfetti() {
            const colors = ['#477eff', '#ff4757', '#ffc145', '#2ecc71', '#9b59b6'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = -10 + 'px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = (Math.random() * 10 + 5) + 'px';
                confetti.style.height = (Math.random() * 10 + 5) + 'px';
                confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                confetti.style.animationDelay = (Math.random() * 2) + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        setInterval(createHearts, 300);

        function showMessage() {
            if(!audioAllowed) {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Nyalain dulu musiknya hehehe',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                    customClass: 'custom-swal'
                });
                return;
            }
            
            Swal.fire({
                title: '✨ thanks a lot! ✨',
                html: '<div style="font-size:1.2rem;">Take care and wish you all the best Syakura!<br><br>- Hanif</div>',
                // imageUrl: 'https://media.tenor.com/wBYXIkDX0k4AAAAi/yellow-cute.gif',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'Thank you',
                showConfirmButton: true,
                confirmButtonText: 'Close',
                background: '#fff',
                customClass: 'custom-swal'
            });
            
            createConfetti();
        }