const xhr = new XMLHttpRequest();
xhr.open("get","https://jsonplaceholder.typicode.com/users");
xhr.send();

console.log("xhr :",xhr);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log("Success...");
    }
}
var result = JSON.parse(xhr.response);
console.log(result);

let content = '';
for(i=0;i<result.length;i++){
    console.log(`object-${i}`,result[i])
    content = content + `<tr>
    <td>${result[i].id}</td>
    <td>${result[i].name}</td>
    <td>${result[i].phone}</td>
    <td>${result[i].username}</td>
    </tr>`
    document.getElementById("datas").innerHTML = content;
}