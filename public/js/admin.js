let configData = {};

fetch("/api/config")
.then(res => res.json())
.then(data => {
    configData = data;

    document.getElementById("appTitle").value =
        data.app.title;

    document.getElementById("heroTitleInput").value =
        data.hero.title;

    document.getElementById("heroDescInput").value =
        data.hero.description;
});

function saveConfig() {

    configData.app.title =
        document.getElementById("appTitle").value;

    configData.hero.title =
        document.getElementById("heroTitleInput").value;

    configData.hero.description =
        document.getElementById("heroDescInput").value;

    fetch("/api/config/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(configData)
    });
}
