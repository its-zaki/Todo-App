let input = document.querySelector("#user_input");
let ul = document.querySelector("ul");
let arr = [];
function todoapp() {
  if (input.value == "") {
    alert("Please enter a task");
  } else {
    arr.push(input.value);
    input.value = ''
    ul.innerHTML = ""
    for (let i = 0; i<arr.length; i++) {
       const items = arr[i];
        //   console.log(items);
      ul.innerHTML += `<li>${items}<li/> <button style="cursor:pointer;" onclick="Delete(${i})">Delete<button/> <button style="cursor:pointer;" onclick="edit_task(${i})">Edit<button/>`;
    }
  }
}
function render(){
    ul.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        items = arr[i];
        //   console.log(items);
      ul.innerHTML += `<li>${items}<li/> <button style="cursor:pointer;" onclick="Delete(${i})">Delete<button/> <button style="cursor:pointer;" onclick="edit_task(${i})">Edit<button/>`;
    }
}
function Delete(index){
    arr.splice(index, 1)
    render();
  
}
function edit_task(index){
    const edited = prompt("Edit:" , arr[index]) 
    if (edited !=="" )
    arr[index] = edited
    render();

}

