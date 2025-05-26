function changerOnglet(onglet_visible) {
    let introduction = document.getElementById("introduction");
    let jeux = document.getElementById("jeux");
    let personnages = document.getElementById("personnages");
    let onglets = [introduction, jeux, personnages];
    console.log(onglets);
    onglets.forEach(onglet => {
        console.log(onglet);
        if (onglet_visible === onglet) {
            onglet.style.visibility = "visible";
            onglet.style.height = "auto";
            onglet.style.margin = "50px";
            onglet.style.overflow = "visible";
        } else {
            onglet.style.visibility = "hidden";
            onglet.style.height = "0";
            onglet.style.margin = "0";
            onglet.style.overflow = "hidden";
        }
    });
}
