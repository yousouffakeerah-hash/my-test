const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    
    tabLinks.forEach(l => l.classList.remove('active-link'));
    
    tabContents.forEach(c => c.classList.remove('active-tab'));

   
    link.classList.add('active-link');
    
    const targetBox = document.getElementById(link.dataset.target);
    targetBox.classList.add('active-tab');
  });
});
