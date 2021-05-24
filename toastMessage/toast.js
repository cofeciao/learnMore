function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000,
}) {
    const mainToast = document.getElementById("toast");
    if(mainToast) {
        const toast = document.createElement('div');
        const icons = {
            success: 'fas fa-check-circle',
            error: '',
            info: 'fas fa-info-circle',
            warning: ''
        }

        // Auto Remove Toast
        const rangeTimeOut = setTimeout(function(){
            mainToast.removeChild(toast);
        },duration);

        // Remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest){
                mainToast.removeChild(toast);
                clearTimeout(rangeTimeOut);
            }
         };

        toast.classList.add('toast', `toast--${type}`);
            toast.innerHTML = `<div class="toast__icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">
                    ${title}
                </div>
                <div class="toast__content">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fas fa-times-circle"></i>
            </div>`;
        toast.style.animation = `SlideInLeft ease .3s, FadeOut linear 0.5s 2s forwards`;
        mainToast.appendChild(toast); 
    }
}