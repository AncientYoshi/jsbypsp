const array1 = ["see", "look at window", "handsome"];
rendorToDoList();
function rendorToDoList() {
  let todoHTMLlist = "";
  for (let i = 0; i < array1.length; i++) {
    const todoHTML = array1[i];
    const html = `<p>${todoHTML}</p>`;
    todoHTMLlist += html;
  }
  console.log(todoHTMLlist);
  document.querySelector(".show-rendor").innerHTML = todoHTMLlist;
}

function getToDoinput() {
  const input = document.querySelector(".get-input");
  const inputElement = input.value;
  array1.push(inputElement);
  console.log(array1);
  input.value = "";
  rendorToDoList();
}
