var words = [
    "Javascript",
    "Node",
    "React",
    "Angular",
    "Document",
    "Object",
    "Class",
    "MongoDB"
];

wordHandler = document.getElementById('word');
textboxHandler = document.getElementById('textbox');
statusHandler = document.getElementById('status');
timeHandler = document.getElementById('time');
scoreHandler = document.getElementById('score');
let count = 0;
let time = 4;
textboxHandler.addEventListener('input', check);

var set = setInterval(function(){
    time--;
    timeHandler.innerHTML = time;
    if(time === 0)
    {
        statusHandler.innerHTML = "Game Over!!!";
        clearInterval(set);
        textboxHandler.setAttribute('readonly', true);

        // resetHandler = document.getElementById('reset');
        // var createButton = document.createElement('BUTTON');
        // var t = document.createTextNode("Click me");
        // createButton.appendChild(t);
        // resetHandler.appendChild(createButton);
    }
},1000);

function check(){
    if(textboxHandler.value === wordHandler.innerHTML)
    {
        var index = Math.floor(Math.random() * words.length);
        wordHandler.innerHTML = words[index];  
        textboxHandler.value = "";   
        count++;
        scoreHandler.innerHTML = count; 
        time = 4;        
    }
}