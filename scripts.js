document.addEventListener('DOMContentLoaded', function() {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let myDiv = document.createElement('div');
    button.appendChild(btnText);
    document.body.appendChild(button);
    document.body.appendChild(myDiv);


    button.addEventListener('click', function() {
        let div = document.createElement('div');
        myDiv.appendChild(div);
        div.style.backgroundColor = 'black';
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.cssFloat = 'left';    
        div.className = 'allDivs';
        div.setAttribute('id', 'id');

    

    })

});

