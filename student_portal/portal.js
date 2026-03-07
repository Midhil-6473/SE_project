document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    checkAuth();

    // Load user data
    loadUserData();

    // Mock "Renew Book" Action
    const renewBtns = document.querySelectorAll('.btn-primary');

    renewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="material-symbols-outlined">check</span> Renewed!';
            this.style.background = '#10B981'; // Green
            this.style.pointerEvents = 'none';

            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.pointerEvents = '';
            }, 2000);
        });
    });

    // Search Input Focus Shortcut (Cmd/Ctrl + K)
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

// Check if user is authenticated
function checkAuth() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
        // Redirect to login if not authenticated
        window.location.href = '/login/login.html';
        return;
    }

    // Verify token with backend
    fetch('http://localhost:3000/api/auth/verify', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (!data.success || data.user.role !== 'student') {
            // Invalid token or not a student
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login/login.html';
        }
    })
    .catch(error => {
        console.error('Auth verification failed:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login/login.html';
    });
}

// Load user data into the page
function loadUserData() {
    const userStr = localStorage.getItem('user');
    if (!userStr) return;

    try {
        const user = JSON.parse(userStr);
        
        // Update user name in hero section
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

        // Update department/role
        const userRole = document.querySelector('.user-info .role');
        if (userRole && user.department) {
            userRole.textContent = user.department;
        }

        // Update university ID display if needed
        console.log('Logged in as:', user.name, '(' + user.university_id + ')');
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Logout function
function logout() {
    const token = localStorage.getItem('token');

    // Call logout API
    fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(() => {
        // Clear local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');

        // Redirect to login
        window.location.href = '/login/login.html';
    })
    .catch(error => {
        console.error('Logout error:', error);
        // Still clear local storage and redirect
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');
        window.location.href = '/login/login.html';
    });
}
