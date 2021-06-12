const addBtn = document.getElementById("add-btn");
const addBox = document.getElementById("add-task");
var i = 1;


addBox.onfocus = function() {
    document.getElementById('add-icon').classList.add("fa-arrow-right");
    document.getElementById('add-icon').classList.remove("fa-plus");
};

addBox.onblur = function() {
    document.getElementById('add-icon').classList.remove("fa-arrow-right");
    document.getElementById('add-icon').classList.add("fa-plus");
}


addBtn.onclick=function () {
    // document.write("Hello")
    var newTask = addBox.value;
    if(newTask==null || newTask=='') {
        alert("Please enter a Task")
    }
    else{
        if(document.getElementById('tasks').innerHTML=="<label>No Task Availabel</label>")
        {
            document.getElementById('tasks').innerHTML=="";
            document.getElementById('tasks').innerHTML="<input type=\"checkbox\" id=\"task-"+i+"\"/><label for=\"task-"+i+"\"><span class=\"name\">"+newTask+"</span><span class=\"icon\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span></label>";
        }else{
            document.getElementById('tasks').innerHTML+="<input type=\"checkbox\" id=\"task-"+i+"\"/><label for=\"task-"+i+"\"><span class=\"name\">"+newTask+"</span><span class=\"icon\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span></label>"
        }
        addBox.value="";
        i++;
    }
};


window.onload = function () {
    if(document.getElementById('tasks').innerHTML==""){
        document.getElementById('tasks').innerHTML="<label>No Task Availabel</label>"
    }   
}