var player = new PlayerMove(-1, -1);

var flist = [];
ritaKarta();


function ritaKarta() {
    var map = document.getElementById("map");
    flist = [];

    for (var y = 0; y < 16; y++)
    {
        for (var x = 0; x < 19; x++)
        {
            var tile = document.createElement("div");
             if (tileMap.mapGrid[y][x] == "W")
            {
                tile.classList.add("wall");
            }
            else if (tileMap.mapGrid[y][x] == "B")
            {
                tile.classList.add("box");
                tile.classList.add("empty");
            }
            else if (tileMap.mapGrid[y][x] == "P")
            {
                tile.classList.add("player");
                tile.classList.add("empty");
                player.x = x;
                player.y = y;
            }
            else if (tileMap.mapGrid[y][x] == "G")
            {
                tile.classList.add("goal");
                flist.push(tile);
            }
            else {
                tile.classList.add("empty");
            }
            tile.setAttribute("id", (y + ',' + x));
            map.appendChild(tile);
        }

    }
}

function PlayerMove(x, y)
{
    this.x = x;
    this.y = y;
}
function ButtonDown(event)
{
    var arrow;
    if (event.keyCode == 37) //left
    {
        event.preventDefault();
        var moveX = player.x - 1;
        var moveY = player.y;
        var moveMoveX = player.x - 2;
        var moveMoveY = player.y;
        //console.log("Left");
        arrow = "Left";
        Move(moveX, moveY, moveMoveX, moveMoveY);
    }
    else if (event.keyCode == 38)//up
    {
        event.preventDefault();
        var moveX = player.x;
        var moveY = player.y - 1;
        var moveMoveX = player.x;
        var moveMoveY = player.y - 2;
        //console.log("Up");// dessa kan jag ta bort.Det är ju bara för att kolla att de fungerar i log.
        arrow = "Up";
        Move(moveX, moveY, moveMoveX, moveMoveY);
    }
    else if (event.keyCode == 39)//right
    {
        event.preventDefault();
        var moveX = player.x + 1;
        var moveY = player.y;
        var moveMoveX = player.x + 2;
        var moveMoveY = player.y;
        //console.log("Right"); 
        arrow = "Right";// Denna kod istället för console.log i början och i slutet, så du inte upprepar dig själv.
        Move(moveX, moveY, moveMoveX, moveMoveY);
    }
    else if (event.keyCode == 40)//down
    {
        event.preventDefault();
        var moveX = player.x;
        var moveY = player.y + 1;
        var moveMoveX = player.x;
        var moveMoveY = player.y + 2;
        //console.log("Down");
        arrow = "Down";
        Move(moveX, moveY, moveMoveX, moveMoveY);
    }

    

    console.log(arrow);// Denna kod istället för console.log i början och i slutet, så du inte upprepar dig själv.
    console.log('Player Y:' + player.y + ' X:' + player.x);
    console.log('Move y:' + moveY + ' X:' + moveX);
}

function Move(moveX, moveY, moveMoveX, moveMoveY)
{
    var nextElement = document.getElementById(moveY + "," + moveX);
    var playerElement = document.getElementById(player.y + "," + player.x);
    var nexNextElement = document.getElementById(moveMoveY + "," + moveMoveX);

    if (nextElement.classList.contains("wall"))
    {
        console.log("wall");
        return;
    }
    else
    {


        if (nextElement.classList.contains("box"))
        {
            console.log(nexNextElement);

            if (nexNextElement.classList.contains("box") || nexNextElement.classList.contains("wall"))
            {
                console.log("boxWall");
                return;
            }
            //else if (nexNextElement.classList.contains("goal"))
            //{
            //    nextElement.classList.add("player");
            //    playerElement.classList.remove("player");

            //    player.y = moveY;
            //    player.x = moveX;

            //    nextElement.classList.remove("box");
            //    nexNextElement.classList.add("box");

            //}
            else
            {
                nextElement.classList.add("player");
                playerElement.classList.remove("player");

                player.y = moveY;
                player.x = moveX;

                nextElement.classList.remove("box");
                nexNextElement.classList.add("box");
            }
        }
        else
        {
            nextElement.classList.add("player");
            playerElement.classList.remove("player");

            player.y = moveY;
            player.x = moveX;
        }

        //// if (nextElement.classList.contains("empty")) {
        //     var nexNextElement = document.getElementById(moveMoveY + "," + moveMoveX);
        //     console.log(nexNextElement);
        //     if (nexNextElement.classList.contains("empty") || nexNextElement.classList.contains("goal")) {
        //         console.log("emptyGoal");
        //         return;
        // }
        //}

        endGoal();
    }

}

function endGoal()
{
    var win = true; 

    for (var j = 0; j < flist.length; j++)
    {
        var currentCell = flist[j];

        console.log(currentCell)

        if (!currentCell.classList.contains("box"))
        {
            win = false;
            break;
        }
    }

     if (win) alert("congratulations!");

} 


function handleKey(event)
{
    switch (event.keyCode)
    {

        case 37: //65  //37

            handleClick(player, "left"); // left => j-1        

            break;

        case 39: //68  //39

            handleClick(player, "right"); // right => j+1

            break;

        case 38: //87  //38

            handleClick(player, "up"); // up => i-1

            break;

        case 40: //83  //40

            handleClick(player, "down"); // down => i+1

            break;
    }

}
var myVar = setInterval(myTimer, 1000);



function myTimer()
{
    var d = new Date();

    //document.getElementById("timer").innerHTML = d.toLocaleTimeString();
     document.getElementById("timer").innerHTML = d.getSeconds();
}



function countUp()
{
 var seconds = 0, minutes = 0, startCounting;

    startCounting = setInterval(function ()

{

        seconds++;

        if (seconds > 59) {

            seconds = 0;

            minutes++;

        }



        document.getElementById("counter").innerHTML = "<p>0" + minutes + ':' + ((seconds < 10) ? ("0" + seconds) : seconds) + "</p>";

    }, 1000);



}



window.onscroll = function (ev) {

    ev.preventDefault();

}





buildBoard();