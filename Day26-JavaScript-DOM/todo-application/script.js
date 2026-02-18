function addTodo(){
    const input = document.getElementById("taskInput");
    const ulList = document.getElementById("taskList");

    if(input.value.trim() === "") return;

    const dataList = document.createElement("li");
    dataList.innerText = `${input.value}`;

    ulList.appendChild(dataList);

    input.value = "";

}