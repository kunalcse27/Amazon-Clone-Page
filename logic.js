
document.querySelector('.nav-cart')?.addEventListener('click', () => {
    alert("🛒 Your cart is currently empty!");
});

document.querySelector('.search-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            alert(`🔍 You searched for: "${query}"`);
        } else {
            alert("Please enter something to search.");
        }
    }
});

const navItems = document.querySelectorAll('.nav-signin, .nav-return, .nav-cart');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#37475A';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
    });
});

const panelOptions = document.querySelectorAll('.panel-ops p');
panelOptions.forEach(option => {
    option.addEventListener('click', () => {
        panelOptions.forEach(p => p.style.textDecoration = 'none');
        option.style.textDecoration = 'underline';
    });
});


document.querySelector('.nav-cart').addEventListener('click', () => {
    alert("🛒 Your cart is currently empty!");
});

// Search on Enter
document.querySelector('.search-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            alert(`🔍 You searched for: "${query}"`);
        } else {
            alert("Please enter something to search.");
        }
    }
});

