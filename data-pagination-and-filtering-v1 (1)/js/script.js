document.addEventListener('DOMContentLoaded', function(){
 const itemsPerPage = 9;
 //loading the items per page as well as the array into the browser
 
 function showPage(list, page) {
   const startIndex = (page - 1) * itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
 
   for (let i = startIndex; i < endIndex && i < list.length; i++) {
     const student = list[i];
     const studentItem = document.createElement('li');
     studentItem.className = 'student-item cf';
     studentItem.innerHTML = `
       <div class="student-details">
         <img class="avatar" src="${student.picture.medium}" alt="Profile Picture">
         <h3>${student.name.first} ${student.name.last}</h3>
         <span class="email">${student.email}</span>
       </div>
       <div class="joined-details">
         <span class="date">Joined ${student.registered.date}</span>
       </div>
     `;
     studentList.appendChild(studentItem);
//Creates the different classes as well as condition so that they register when webpage is launched
   }
 }
 
 function addPagination(list) {
   const numOfPages = Math.ceil(list.length / itemsPerPage);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
 
   for (let i = 1; i <= numOfPages; i++) {
     const listItem = document.createElement('li');
     listItem.innerHTML = `<button type="button">${i}</button>`;
     linkList.appendChild(listItem);
   }
 
   const firstButton = linkList.querySelector('button');
   firstButton.className = 'active';
 
   linkList.addEventListener('click', (e) => {
     if (e.target.tagName === 'BUTTON') {
       const buttons = linkList.querySelectorAll('button');
       buttons.forEach((button) => {
         button.className = '';
       });
       e.target.className = 'active';
       showPage(list, e.target.textContent);
     }
   });
 }
 showPage(data, 1);
 addPagination(data);
   }
);
//loads webpage from and refers to data.js tab element