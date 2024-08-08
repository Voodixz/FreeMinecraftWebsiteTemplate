        function copyText(text) {
            navigator.clipboard.writeText(text).then(function() {
                console.log('Text copied to clipboard');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }
        function copyText(text) {
            // Create a temporary textarea to hold the text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        
            // Show the popup
            const popup = document.getElementById('popup');
            popup.classList.remove('fadeOut');
            popup.classList.add('fadeIn');
            document.querySelector('.popup-content').classList.remove('scaleOut');
            document.querySelector('.popup-content').classList.add('scaleIn');
            popup.style.display = 'flex';
        }
        
        function closePopup() {
            const popup = document.getElementById('popup');
            popup.classList.remove('fadeIn');
            popup.classList.add('fadeOut');
            document.querySelector('.popup-content').classList.remove('scaleIn');
            document.querySelector('.popup-content').classList.add('scaleOut');
            
            // Wait for the animation to complete before hiding the popup
            setTimeout(() => {
                popup.style.display = 'none';
            }, 500); // 500ms matches the animation duration
        }
        