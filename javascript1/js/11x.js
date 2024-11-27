const array1 = JSON.parse(localStorage.getItem("array1")) || [
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
localStorage.setItem("array1", JSON.stringify(array1));
rendorToDoList();
function rendorToDoList() {
  let todoHTMLlist = "";
  for (let i = 0; i < array1.length; i++) {
    const todoHTML = array1[i];
    const html = `<div>${todoHTML.name}</div><div> ${todoHTML.date}</div>
      <button class='delete-input' onclick='array1.splice(${i},1); rendorToDoList()'>
      Delete
      </button>
      `;
    todoHTMLlist += html;
  }
  console.log(todoHTMLlist);
  localStorage.setItem("array1", JSON.stringify(array1));

  document.querySelector(".show-rendor").innerHTML = todoHTMLlist;
}

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
