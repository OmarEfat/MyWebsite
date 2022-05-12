
function help()
{
    changeText();
    setTimeout(textEmpty,800);
}

function changeText()
{
    document.getElementById('topMessage').innerHTML = 'You are already in home!';   

}

function textEmpty()
{
    document.getElementById('topMessage').innerHTML = '';   

}
