// JavaScript for Faculty Portal
document.addEventListener('DOMContentLoaded', () => {
    console.log('Faculty portal loaded');

    // Dismiss notification alerts
    document.querySelectorAll('.alert-dismiss').forEach(btn => {
        btn.addEventListener('click', () => {
            const alertItem = btn.closest('.alert-item');
            alertItem.style.opacity = '0';
            alertItem.style.transform = 'translateX(40px)';
            alertItem.style.maxHeight = alertItem.scrollHeight + 'px';
            setTimeout(() => {
                alertItem.style.maxHeight = '0';
                alertItem.style.padding = '0 20px';
                alertItem.style.margin = '0';
                alertItem.style.overflow = 'hidden';
            }, 200);
            setTimeout(() => {
                alertItem.remove();
            }, 500);
        });
    });
});
