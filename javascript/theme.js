const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

/** 
 * @param {'light', 'dark'} theme 
 */
function setTheme(theme) {
    if (theme === 'light') {
        localStorage.setItem('theme', 'light');
        root.setAttribute('theme', 'light')
    } else if (theme === 'dark') {
        localStorage.setItem('theme', 'dark');
        root.setAttribute('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'dark');
        root.setAttribute('theme', 'dark');
    }
}

const saved = localStorage.getItem('theme');

if (saved) {
    setTheme(saved); 
    console.log('saved changed');
} else {
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(sysDark ? 'dark' : 'light');

    console.log('changed');
}


themeToggle.addEventListener('click', () => {
    const isDark = localStorage.getItem('theme') === 'dark';
    const result = isDark ? 'light': 'dark';

    setTheme(result);
    themeToggle.textContent = (result === 'dark' ? 'Светлая' : 'Темная');

    console.log('click')
});