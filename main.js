name_of_games=[];
function submit()
{    
name_1=document.getElementById("name_of_the_game_1").value;
name_2=document.getElementById("name_of_the_game_2").value;  
name_3=document.getElementById("name_of_the_game_3").value;
name_4=document.getElementById("name_of_the_game_4").value;

name_of_students.push(name_1);
name_of_students.push(name_2);
name_of_students.push(name_3);
name_of_students.push(name_4);

document.getElementById("dispaly_name").innerHTML=name_of_games;

document.getElementById("submit_button").style.display = "none";

document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
name_of_games.sort();
console.log(name_of_games);
document.getElementById("dispaly_game").innerHTML=name_of_games;
4
}