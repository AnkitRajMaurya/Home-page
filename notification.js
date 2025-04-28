// js/notification.js
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Example Notification
document.addEventListener('DOMContentLoaded', function() {
    showToast('Welcome back, Coder!');
});