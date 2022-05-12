
function help()
{
    changeText();
    setTimeout(textEmpty,800);
}

function changeText()
{
    document.getElementById('topMessage').innerHTML = 'You are already in home! You are causing Recursion';   

}

function textEmpty()
{
    document.getElementById('topMessage').innerHTML = '';   

}