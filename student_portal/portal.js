document.addEventListener('DOMContentLoaded', () => {
    // checkAuth();
    loadUserData();

    // Mock "Renew Book" Action
    const renewBtns = document.querySelectorAll('.btn-primary');

    renewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="material-symbols-outlined">check</span> Renewed!';
            this.style.background = '#10B981';
            this.style.pointerEvents = 'none';

            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.pointerEvents = '';
            }, 2000);
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.search-area input').focus();
        }
    });

    // Notification Dot Click
    const notifBtn = document.querySelector('.icon-btn');
    notifBtn.addEventListener('click', () => {
        const dot = document.querySelector('.notification-dot');
        if (dot) dot.remove();
        alert('You have 2 new notifications:\n1. Book "Introduction to Algorithms" is due tomorrow.\n2. New arrival: "Clean Code" by Robert C. Martin.');
    });

    // User Profile Click - Logout functionality
    const userProfile = document.querySelector('.user-profile');
    userProfile.style.cursor = 'pointer';
    userProfile.addEventListener('click', () => {
        if (confirm('Do you want to logout?')) {
            logout();
        }
    });

    // Logout button click
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                logout();
            }
        });
    }
});

function checkAuth() {
    return true;
}

// Load user data into the page
function loadUserData() {
    const userStr = localStorage.getItem('user');
    if (!userStr) return;

    try {
        const user = JSON.parse(userStr);
        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle) {
            const firstName = user.name.split(' ')[0];
            heroTitle.textContent = `Welcome back, ${firstName}`;
        }

        // Update user profile in header
        const userName = document.querySelector('.user-info .name');
        if (userName) {
            userName.textContent = user.name;
        }
        const userRole = document.querySelector('.user-info .role');
        if (userRole && user.department) {
            userRole.textContent = user.department;
        }
        console.log('Logged in as:', user.name, '(' + user.university_id + ')');
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}


// Logout function
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    window.location.href = '/login/login.html';
}
