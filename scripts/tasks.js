'use strict';

document.querySelector('.task-container')
  .addEventListener('click',
    function(event){
       try{
         if(event.target.attributes["data-class"].value === 'button'){
           toggleHiddenClass(event.target);
         }
       } catch (e){};
    });

function toggleHiddenClass(target) {
  const targetDetailsClassList = target.parentElement.nextElementSibling.classList;
  if (targetDetailsClassList.contains('hidden')){
    hideAllDetails();
    targetDetailsClassList.remove('hidden');
  } else {
    targetDetailsClassList.add('hidden');
  }
}

function hideAllDetails(){
  const allDetails = Array.from(document.getElementsByClassName('task-detail'));
  allDetails.forEach(function(detail){
    if(detail.classList.contains('hidden')){
    } else {
      detail.classList.add('hidden');
    }
  })
}

var checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
checkboxes.forEach(function(box){
  box.onchange = checkboxChange;
});


function checkboxChange(event){
  const task = event.target.nextElementSibling;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  };
}


// Lessons learned
// * Can't iterate through an HTMLCollection but you can convert it to an Array
// with the prototype method Array.from(<Array-like-item>)