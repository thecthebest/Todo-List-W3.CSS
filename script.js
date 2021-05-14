//Handle to forms 1
const searchInputForm = document.querySelector("#form1");
//Handle to forms 2
const addNewDoForm = document.querySelector("#form2");
// handle to list
const list = document.querySelector("#list");
// Generate new to do and inserts them
const generateTemplate = (value) => {
    const html =
      `<li>${value}
         <i class="w3-right fa fa-trash"></i>
       </li>`;
    list.innerHTML += html;
};

// Listen to events in the add
addNewDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = addNewDoForm.addDo.value.trim();
    if (input.length) {
        generateTemplate(input);
        addNewDoForm.reset();
    }
});
// Delete to Do
list.addEventListener("click", (event) => {
    if (event.target.nodeName === "I") {
        event.target.parentElement.remove();
    }
});
//Filter to do function
const filterToDo = (term) => {
    Array.from(list.children)
      .filter(li => !li.textContent.toLowerCase().includes(term))
      .forEach((li) => {
          li.classList.add("w3-hide");
      });
      Array.from(list.children)
      .filter(li => li.textContent.toLowerCase().includes(term))
      .forEach((li) => {
          li.classList.remove("w3-hide");
      });
};
// Search to Do
searchInputForm.addEventListener("keyup", () => {
    const term = searchInputForm.searchDo.value.trim().toLowerCase();
    filterToDo(term);
});

