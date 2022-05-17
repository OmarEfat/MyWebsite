
function help()
{
    changeText();
    setTimeout(textEmpty,800);
}

function changeText()
{
    document.getElementById('topMessage').innerHTML = 'This is Home!';   

}

function textEmpty()
{
    document.getElementById('topMessage').innerHTML = '';   

}
