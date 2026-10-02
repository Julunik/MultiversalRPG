const GameLogo = document.getElementById("ikona");
const icons = ["krpg3_classic.png", "krpg3_mrpg.png", "krpg3_mrpg_2.png", "mrpg_icon_1.png", "mrpg_icon_2.png", "mrpg_icon_3.png"];

function Clicked(){
    GameLogo.src = "files/"+icons[Math.floor(Math.random() * (icons.length - 1))];
    console.log("LOGO CLICKED!");
}

fetch("https://julunik.github.io/main/mrpg/latest.json")
    .then(response => {
        if (!response.ok) throw new Error("Unable to download JSON");
        return response.json();
    })
    .then(data => {
        document.getElementById("mrpg_launcher_download").href = data.launcherLatest;
        document.getElementById("mrpg_android_download").href = data.androidLatest;
    })
    .catch(error => {
        console.error(error);
    });

console.log("Site Version: 13");
