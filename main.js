
function help()
{
    changeText();
    setTimeout(textEmpty,800);
}

function changeText()
{
    document.getElementById('topMessage').innerHTML = 'Yooo, This is home!';

}

function textEmpty()
{
    document.getElementById('topMessage').innerHTML = '';   

}
