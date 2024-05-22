document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const textBox = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  const dropdown = document.createElement('select');
  const prior = document.createElement('label');
  prior.innerText = "Priority:";
  const red = document.createElement('option')
  red.innerText = "High";
  const yellow = document.createElement('option')
  yellow.innerText = "Medium";
  const green = document.createElement('option');
  green.innerText = "Low";
  dropdown.append(red, yellow, green);
  textBox.after(dropdown);
  dropdown.before(prior);
  prior.style.marginLeft = "5px";
  dropdown.style.marginLeft = "5px";
  dropdown.style.marginRight = "5px";
  const high = document.createElement('div');
  const med = document.createElement('div');
  const low = document.createElement('div');
  const non = document.createElement('div');
  const sort = document.createElement('label');
  sort.innerText = "Sort By Priority: ";
  const incSortBut = document.createElement('input');
  incSortBut.type = "radio";
  incSortBut.name = "sorting";
  incSortBut.id = "choice1";
  incSortBut.checked = true;
  const decSortBut = document.createElement('input');
  decSortBut.type = "radio";
  decSortBut.name = "sorting";
  decSortBut.id = "choice2";
  const incSortLabel = document.createElement('label');
  incSortLabel.innerText = "Increasing";
  incSortLabel.htmlFor = "choice1";
  const decSortLabel = document.createElement('label');
  decSortLabel.innerText = "Decreasing";
  decSortLabel.htmlFor = "choice2";
  dropdown.after(sort, incSortBut, incSortLabel, decSortBut, decSortLabel);

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const toDo = document.createElement('li');
    toDo.innerText = textBox.value[0].toUpperCase() + textBox.value.slice(1);
    if(dropdown.value === 'High'){
      toDo.style.color = "red";
      high.appendChild(toDo);
    }
    else if(dropdown.value === 'Medium'){
      toDo.style.color = "#CCCC00";
      med.appendChild(toDo);
    }
    else if(dropdown.value === 'Low'){
      toDo.style.color = "green";
      low.appendChild(toDo);
    }
    else{
      non.appendChild(toDo);
    }
    if(incSortBut.checked){
      list.append(high, med, low, non);
    }
    else{
      list.append(low, med, high, non);
    }
    const del = document.createElement('input');
    del.type = "button";
    del.value = "Delete";
    toDo.appendChild(del);
    del.style.margin = "10px";
    del.addEventListener('click', () => {
      toDo.remove();
    });
    textBox.value = "";
    const title = document.getElementsByTagName('h2')[0];
    title.style.textAlign = "center";
  });
});
