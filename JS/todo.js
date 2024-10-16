let task_arr=[];
while(true){
    let req=prompt("Enter the task : ").toLowerCase();
    if(req=="list"){
        console.log("--------------------");
        for(let i=0;i<task_arr.length;i++){
            console.log(`${i} ${task_arr[i]}`);
        }
        console.log("--------------------");
    }
    else if(req=="add"){
        let task=prompt("Enter the task to be added : ");
        task_arr.push(task);
        console.log("Task Added.");
    }
    else if(req=="delete"){
        let del=prompt("Enter the task index to be deleted : ");
        task_arr.splice(del,1);
        console.log("Task Deleted. ");
    }
    else if(req=="quit"){
        console.log("Quitted Successfully ! :( ");
        break;
    }
    else{
        console.log("No such command exists ! ");
    }
}