const element = document.querySelector('#main')
element.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Austin is the champion';
document.body.appendChild(newHeader);
