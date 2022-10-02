var dayQuiz;
var dayIndex = 0;
var firstDay;
var lastDay;
var perPage = 100;
var page = 1;

async function loadDayQuizJson(){
    dayQuiz = await fetch("./dayQuiz.json").then((response) => response.json());
    dayIndex = dayQuiz["days"].length - 1;
    updateQuadrant();
    firstDay = new Date(dayQuiz["days"][0].slice().reverse().join("/"));
    lastDay = new Date(dayQuiz["days"].at(-1).slice().reverse().join("/"));
}

function updateQuadrant(){
    // date
    date = document.getElementById("date");
    date.innerText = dayQuiz["days"][dayIndex].join(" / ");
    //participant is refresh by populateBoard
    //Time Left
    time = document.getElementById("time");
    var t = setInterval(function(){
        if (dayIndex != dayQuiz["days"].length - 1){
            clearInterval(t);
            time.innerText = "Expired";
            return;
        }

        now = new Date().getTime();
        [d, m, y] = dayQuiz["days"].at(-1)
        end = new Date(Date.UTC(y, m - 1, d, 17, 50, 30)).getTime();
        dif = end - now;

        if (dif < 0 ){
            clearInterval(t);
            time.innerText = "Expired";
            return;
        }
        h = Math.floor(dif % 864e5 / 36e5);
        m = Math.floor(dif % 36e5 / 6e4);
        s = Math.floor(dif % 6e4 / 1e3);
        time.innerText = h + " : " + m + " : " + s;
    }, 1000);
        
    
}

async function getData(start, offset){
    id = dayQuiz["quizID"][dayIndex];
    urlboard = "https://console.stagecast.io/api/quests/" + id + "/results?offset=" + start + "&limit=" + offset;
    return await fetch(urlboard).then((response) => response.json());
}
async function refreshBoard(){
    board = document.getElementById("leaderboard");
    for (var i = 1; board.rows.length > 1; i) {
        board.deleteRow(i);
    }
    updateQuadrant();
    populateBoard((page - 1) * perPage, perPage);
}

async function populateBoard(start, offset){
    board = document.getElementById("leaderboard");
    data = await getData(start, offset);

    nplayer = document.getElementById("nplayer");
    nplayer.innerText = data["totalParticipants"];

    position = 0;
    data["leaderboard"].forEach((player) => {
        // Row Separator
        row = board.insertRow(++position);

        pos = document.createElement("td");
        pos.setAttribute("class", "space2");

        uname = document.createElement("td");
        uname.setAttribute("class", "space1");

        bestScore = document.createElement("td");
        bestScore.setAttribute("class", "space2");

        row.appendChild(pos);
        row.appendChild(uname);
        row.appendChild(bestScore);

        //Actual Row

        row = board.insertRow(++position);

        pos = document.createElement("td");
        pos.setAttribute("class", "pos");
        pos.innerText = player["position"].toString();

        uname = document.createElement("td");
        uname.setAttribute("class", "name");
        uname.innerText = player["name"];

        bestScore = document.createElement("td");
        bestScore.setAttribute("class", "point");
        bestScore.innerText = player["bestScore"];

        row.appendChild(pos);
        row.appendChild(uname);
        row.appendChild(bestScore);
    });
};

async function onload(){
    //return;
    await loadDayQuizJson();
    await populateBoard(0, 100);
}

async function goToPage(){
    buttonState(true);
    npage = document.getElementById("input_page").value;
    if (npage < 1){
        buttonState(false);
        return;
    }
    nplayer = parseInt(document.getElementById("nplayer").innerText);
    maxpage = Math.floor(nplayer/perPage)
    if (npage > maxpage){
        npage = maxpage
        document.getElementById("input_page").value = maxpage;
    }
    page = npage;
    await refreshBoard();
    buttonState(false);
}

async function setPerPage(){
    buttonState(true);
    perPage = document.getElementById("input_perpage").value;
    if (perPage < 1){
        buttonState(false);
        return;
    }
    await refreshBoard();
    buttonState(false);
}

async function goToDate(){
    buttonState(true);

    v = document.getElementById("input_date").value
    if (v == ""){
        buttonState(false);
        return;
    }
    date = new Date(v) - 7200000;
    if ((date < firstDay) || (date > lastDay)){
        return;
    };
    dayIndex = Math.floor((date - firstDay)/86400000);
    page = 1;

    await refreshBoard();

    buttonState(false);
}

async function findPlayer(){
    buttonState(true);

    uname = document.getElementById("input_username").value;
    if (!uname.includes("#") || 
        (uname == "yourUsername#id") || 
        (uname.length <3) ||
        (uname.indexOf("#") == uname.length - 1)){
        buttonState(false);
        return;
    }
    found = false;
    playerData = [];
    offset = 1000;
    nplayer = offset;
    
    for (var b = 0; b < nplayer && !found; b += offset){
        console.log(b, offset - 1)
        data = await getData(b,offset - 1);
        nplayer = data["totalParticipants"];
        data["leaderboard"].every((player) => {
            if (uname == player["name"]){
                found = true;
                playerData = [player["position"], player["name"], player["bestScore"]];
                return false;
            }
            return true;
        });
    }

    document.querySelector('#quadrant2').style.height='600px';
    div = document.getElementById("findResults");
    [uname, table] = div.children;
    uname.innerText = playerData[1];
    table.children[0].children[0].children[0].innerText = "Pos";
    table.children[0].children[0].children[1].innerText = playerData[0];
    table.children[0].children[1].children[0].innerText = "Page";
    table.children[0].children[1].children[1].innerText = Math.floor(playerData[0] / perPage);
    table.children[0].children[2].children[0].innerText = "Points";
    table.children[0].children[2].children[1].innerText = playerData[2];
    buttonState(false);
}

function buttonState(bool){
    buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        button = buttons[i];
        button.disabled = bool;
    }
}