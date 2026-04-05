const bookDatabase = [
    {
        id: 1,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        category: "Computer Science",
        year: 2008,
        status: "Available",
        statusClass: "available",
        coverHTML: `
            <div class="card-cover cover-1">
                <div style="position: absolute; inset:0; display:flex; flex-direction:column; padding:12px">
                    <p style="font-size:7px; opacity:0.7">A HANDBOOK OF AGILE SOFTWARE CRAFTSMANSHIP</p>
                    <p style="font-size:18px; font-weight:700; margin-top:16px; letter-spacing:-1px">Cleam</p>
                    <div style="margin-top:auto">
                        <p style="font-size:6px; opacity:0.8; text-transform:uppercase; line-height:1.2">Written cleanly perfectly crafted object oriented...</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Algorithms",
        year: 2022,
        status: "Checked Out",
        statusClass: "checked-out",
        due: "Oct 24",
        coverHTML: `
            <div class="card-cover cover-2">
                <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:8px;">
                    <p style="font-size:6px; text-transform:uppercase; font-weight:600; color:#164e63; position:absolute; top:12px;">Revised Editon</p>
                    <p style="font-size:14px; font-weight:700; color:#fef08a; line-height:1.2">Introduction<br>To Algorithms</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "The Elements of User Experience",
        author: "Jesse James Garrett",
        category: "Design",
        year: 2019,
        status: "Reference Only",
        statusClass: "reference",
        coverHTML: `
            <div class="card-cover cover-3">
                <div class="geom-bg-1"></div>
                <div class="geom-bg-2"></div>
            </div>
        `
    },
    {
        id: 4,
        title: "Modern World History: Patterns of Interaction",
        author: "Roger B. Beck",
        category: "History",
        year: 2021,
        status: "Available",
        statusClass: "available",
        coverHTML: `
            <div class="card-cover cover-4">
                <p style="font-size:7px; font-weight:700; text-align:center; color:#374151; text-transform:uppercase; letter-spacing:1px; margin-top:8px">Modern History Vol - 1</p>
                <div style="flex:1; margin-top:16px; margin-left:4px; margin-right:4px; display:flex; gap:4px; justify-content:center;">
                    <div style="width:100%; height:100%; background:white; opacity:0.8; border-radius:2px; padding:4px; display:flex; flex-direction:column; gap:2px">
                        <div style="height:1px; width:100%; background:#d1d5db"></div>
                        <div style="height:1px; width:100%; background:#d1d5db"></div>
                    </div>
                    <div style="width:100%; height:100%; background:white; opacity:0.8; border-radius:2px; padding:4px; display:flex; flex-direction:column; gap:2px">
                        <div style="height:1px; width:100%; background:#d1d5db"></div>
                        <div style="height:1px; width:100%; background:#d1d5db"></div>
                    </div>
                </div>
                <p style="font-size:6px; text-align:center; color:#6b7280; margin-top:8px; margin-bottom:4px">Roger B. Beck</p>
            </div>
        `
    },
    {
        id: 5,
        title: "Principles of Microeconomics",
        author: "N. Gregory Mankiw",
        category: "Economics",
        year: 2023,
        status: "Available",
        statusClass: "available",
        coverHTML: `
            <div class="card-cover cover-5">
                <div style="width:4px; position:absolute; left:0; top:0; bottom:0; background:#dc2626"></div>
                <p style="font-size:13px; letter-spacing:2px; color:#064e3b; margin-bottom:4px">ECONOMIC</p>
                <p style="font-size:6px; width:75%; text-align:center; line-height:1.2; margin-bottom:16px; opacity:0.7">PRINCIPLES OF MICROECONOMICS N. GREGORY MANKIW</p>
                <div style="display:flex; align-items:flex-end; gap:4px; padding:0 16px; margin-top:auto; margin-bottom:24px; height:40px; width:100%; opacity:0.6">
                    <div style="width:100%; background:#059669; height:25%"></div>
                    <div style="width:100%; background:#059669; height:50%"></div>
                    <div style="width:100%; background:#059669; height:25%"></div>
                    <div style="width:100%; background:#059669; height:75%"></div>
                    <div style="width:100%; background:#059669; height:100%"></div>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "Psychology",
        year: 2020,
        status: "Checked Out",
        statusClass: "checked-out",
        due: "Nov 02",
        coverHTML: `
            <div class="card-cover cover-6">
                <div style="color:#4a3623; text-align:center; width:100%; padding:0 8px; margin-top:8px">
                    <p style="font-size:8px; letter-spacing:1px; margin-bottom:8px; opacity:0.8">NOT THE WORK E WORK</p>
                    <svg viewBox="0 0 100 100" style="width:64px; height:64px; margin:0 auto; opacity:0.7; fill:currentColor">
                        <path d="M50 20 c -20 0 -30 15 -30 30 c 0 15 10 30 30 30 c 20 0 30 -15 30 -30 c 0 -15 -10 -30 -30 -30 z m -10 10 c 5 0 5 5 0 5 c -5 0 -5 -5 0 -5 z m 20 0 c 5 0 5 5 0 5 c -5 0 -5 -5 0 -5 z M 30 45 c 0 10 10 10 20 10 c 10 0 20 0 20 -10 M 35 60 c 5 0 15 5 25 0" stroke="currentColor" fill="none" stroke-width="2" />
                    </svg>
                    <p style="font-size:8px; margin-top:12px; letter-spacing:1px; font-weight:700; margin-bottom:4px">PSYCHOLOGY FORETHOUGHT</p>
                </div>
            </div>
        `
    }
];

let appState = {
    currentPage: 1,
    booksPerPage: 6,
    totalPages: 1,
    filteredBooks: [],
    sortBy: 'Relevance'
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("Book search app initialized.");

    appState.filteredBooks = [...bookDatabase];

    document.querySelector('.search-btn').addEventListener('click', handleSearch);
    document.querySelector('.search-input').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    document.querySelector('.apply-filters-btn').addEventListener('click', applyFilters);
    document.querySelector('.reset-btn').addEventListener('click', resetFilters);

    document.querySelector('.sort-select').addEventListener('change', (e) => {
        appState.sortBy = e.target.value;
        applySort();
        renderMainView();
    });

    applySort();
    renderMainView();
});

function renderMainView() {
    appState.totalPages = Math.ceil(appState.filteredBooks.length / appState.booksPerPage) || 1;

    if (appState.currentPage > appState.totalPages) {
        appState.currentPage = appState.totalPages;
    }

    renderBooks();
    renderPagination();

    const countText = document.querySelector('.results-text');
    if (countText) {
        countText.innerHTML = `<span style="font-weight:700">${appState.filteredBooks.length}</span> <span class="normal">results found</span>`;
    }
}

function renderBooks() {
    const grid = document.querySelector('.book-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const startIndex = (appState.currentPage - 1) * appState.booksPerPage;
    const paginatedBooks = appState.filteredBooks.slice(startIndex, startIndex + appState.booksPerPage);

    if (paginatedBooks.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b7280; padding: 40px 0;">No books found matching your criteria.</p>';
        return;
    }

    paginatedBooks.forEach(book => {
        let actionButtonHTML = '';
        if (book.status === "Available") {
            actionButtonHTML = `<button class="action-btn primary" onclick="alert('Proceeding to borrow: \\n' + '${book.title.replace(/'/g, "\\'")}')">Borrow</button>`;
        } else if (book.status === "Checked Out") {
            actionButtonHTML = `<button class="action-btn secondary" onclick="alert('A reserve request was placed for: \\n' + '${book.title.replace(/'/g, "\\'")}')">Reserve</button>`;
        } else {
            actionButtonHTML = `<button class="action-btn secondary" style="background:white" onclick="alert('Viewing full details for: \\n' + '${book.title.replace(/'/g, "\\'")}')">View Details</button>`;
        }

        let dueHTML = book.due ? `<div class="book-due">Due:<br>${book.due}</div>` : '';

        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            ${book.coverHTML}
            <div class="card-details">
                <div>
                    <span class="status-badge ${book.statusClass}">${book.status}</span>
                    <h3 class="book-title" title="${book.title}">${book.title.length > 28 ? book.title.substring(0, 25) + '...' : book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    ${book.due ? `
                    <div class="meta-split">
                        <p class="book-meta">${book.category}<br>• ${book.year}</p>
                        ${dueHTML}
                    </div>` : `
                    <p class="book-meta">${book.category} • ${book.year}</p>
                    `}
                </div>
                <div class="card-actions">
                    ${actionButtonHTML}
                    <button class="bookmark-btn" onclick="toggleBookmark(this)">
                        <span class="material-symbols-outlined" style="font-size:18px; font-variation-settings: 'FILL' 0">bookmark</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleSearch() {
    applyFilters();
}

function applyFilters() {
    let temp = [...bookDatabase];

    const checkboxLabels = document.querySelectorAll('.checkbox-label');
    const availableNow = checkboxLabels[0].querySelector('input').checked;

    if (availableNow) {
        temp = temp.filter(b => b.status === "Available");
    }

    const checkedCats = [];
    const filterGroups = document.querySelectorAll('.filter-group');
    if (filterGroups.length > 1) {
        const catLabels = filterGroups[1].querySelectorAll('.checkbox-label');
        catLabels.forEach(label => {
            if (label.querySelector('input').checked) {
                checkedCats.push(label.querySelector('span').innerText.trim());
            }
        });
    }

    if (checkedCats.length > 0) {
        temp = temp.filter(b => checkedCats.some(cat => b.category.includes(cat) || cat.includes(b.category)));
    }

    const yearInputs = document.querySelectorAll('.year-input');
    const minYear = parseInt(yearInputs[0].value);
    const maxYear = parseInt(yearInputs[1].value);

    if (!isNaN(minYear)) {
        temp = temp.filter(b => b.year >= minYear);
    }
    if (!isNaN(maxYear)) {
        temp = temp.filter(b => b.year <= maxYear);
    }

    const term = document.querySelector('.search-input').value.toLowerCase().trim();
    if (term) {
        temp = temp.filter(b => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term));
    }

    appState.filteredBooks = temp;
    appState.currentPage = 1;
    applySort();
    renderMainView();
}

function resetFilters() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    document.querySelector('.search-input').value = '';


    const yearInputs = document.querySelectorAll('.year-input');
    yearInputs.forEach(i => i.value = '');

    const sortSelect = document.querySelector('.sort-select');
    sortSelect.value = 'Relevance';
    appState.sortBy = 'Relevance';

    appState.filteredBooks = [...bookDatabase];
    appState.currentPage = 1;
    applySort();
    renderMainView();
}

function applySort() {
    const val = appState.sortBy;
    if (val === 'Title (A-Z)') {
        appState.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (val === 'Newest Arrivals' || val === 'Publication Year') {
        appState.filteredBooks.sort((a, b) => b.year - a.year);
    } else {
        appState.filteredBooks.sort((a, b) => a.id - b.id);
    }
}

function renderPagination() {
    const container = document.getElementById('pagination-container');
    if (!container) return;

    let html = '';
    const current = appState.currentPage;
    const total = appState.totalPages;

    const prevDisabled = current === 1 ? 'disabled' : '';
    html += `
        <button class="page-btn ${prevDisabled}" onclick="changePage(${current - 1})">
            <span class="material-symbols-outlined" style="font-size:14px">chevron_left</span>
        </button>
    `;

    const addPageBtn = (content, isDot = false) => {
        if (isDot) {
            html += `<span style="color: #9ca3af; padding: 0 4px;">...</span>`;
        } else {
            const num = parseInt(content);
            const activeClass = num === current ? 'active' : '';
            html += `<button class="page-btn ${activeClass}" onclick="changePage(${num})">${num}</button>`;
        }
    }

    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            addPageBtn(i);
        }
    } else {
        if (current <= 3) {
            addPageBtn(1);
            addPageBtn(2);
            addPageBtn(3);
            if (current === 3) addPageBtn(4);
            addPageBtn('...', true);
            addPageBtn(total);
        } else if (current >= total - 2) {
            addPageBtn(1);
            addPageBtn('...', true);
            if (current === total - 2) addPageBtn(total - 3);
            addPageBtn(total - 2);
            addPageBtn(total - 1);
            addPageBtn(total);
        } else {
            addPageBtn(1);
            addPageBtn('...', true);
            addPageBtn(current - 1);
            addPageBtn(current);
            addPageBtn(current + 1);
            addPageBtn('...', true);
            addPageBtn(total);
        }
    }

    const nextDisabled = current === total || total === 0 ? 'disabled' : '';
    html += `
        <button class="page-btn ${nextDisabled}" onclick="changePage(${current + 1})">
            <span class="material-symbols-outlined" style="font-size:14px">chevron_right</span>
        </button>
    `;

    container.innerHTML = html;
}

window.changePage = function (newPage) {
    if (newPage < 1 || newPage > appState.totalPages) return;
    appState.currentPage = newPage;
    renderMainView();
};

window.toggleBookmark = function (btn) {
    const span = btn.querySelector('span');
    if (btn.dataset.bookmarked === 'true') {
        btn.dataset.bookmarked = 'false';
        span.style.fontVariationSettings = "'FILL' 0";
        btn.style.color = "var(--text-light)";
    } else {
        btn.dataset.bookmarked = 'true';
        span.style.fontVariationSettings = "'FILL' 1";
        btn.style.color = "var(--primary)";
    }
};
