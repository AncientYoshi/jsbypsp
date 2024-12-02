const array1 = [
  {
    name: "see",
    date: "2012-01-01",
  },
  {
    name: "look at window",
    date: "2012-5-01",
  },
  {
    name: "handsome",
    date: "2022-2-23",
  },
];
rendorToDoList();
function rendorToDoList() {
  let todoHTMLlist = "";
  array1.forEach(function (todoHTML, i) {
    const html = `<div>${todoHTML.name}</div><div> ${todoHTML.date}</div>
    <button class='delete-input js-delete' >
    Delete
    </button>
    `;
    todoHTMLlist += html;
  });
  document.querySelectorAll(".js-delete").forEach((deleteButton, i) => {
    deleteButton.addEventListener("click", () => {
      array1.splice(i, 1);
      rendorToDoList();
    });
  });
  /*for (let i = 0; i < array1.length; i++) {
    const todoHTML = array1[i];
    const html = `<div>${todoHTML.name}</div><div> ${todoHTML.date}</div>
    <button class='delete-input' onclick='array1.splice(${i},1); rendorToDoList()'>
    Delete
    </button>
    `;
    todoHTMLlist += html;
  }*/
  console.log(todoHTMLlist);
  document.querySelector(".show-rendor").innerHTML = todoHTMLlist;
}
document.querySelector(".js-add").addEventListener("click", () => {
  getToDoinput();
});

function getToDoinput() {
  const name = document.querySelector(".get-input");
  const inputElement = name.value;
  const date = document.querySelector(".get-date");
  const dateElement = date.value;
  array1.push({
    name: inputElement,
    date: dateElement,
  });
  console.log(array1);
  name.value = "";
  rendorToDoList();
}
