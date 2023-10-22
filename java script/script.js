const draggable = document.getElementById('draggable'); 
const dropzone = document.querySelector('.dropzone');
const dropzonePlaceholder = document.querySelector('.dropzone-placeholder');


draggable.addEventListener('dragstart', (event) => { 
  event.dataTransfer.setData('text/plain', event.target.id);
});

dropzone.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 


dropzone.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  console.log(draggableId); 
  const element = document.getElementById(draggableId);
  dropzone.replaceChild(element, dropzone.children[0]); 
});