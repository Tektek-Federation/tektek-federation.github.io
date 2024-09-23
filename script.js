function selectLanguage(language){
    const kattspek = document.getElementById("kattspek");
    const english= document.getElementById("english");

    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const wiki = document.getElementById("wiki");
    const news = document.getElementById("news");
    const citizen = document.getElementById("citizen");
    const tiutro = document.getElementById("tiutro");

    if (language=='Kattspek'){
        kattspek.style.border = "3px solid #ffffff";
        english.style.border="";
        title.innerHTML = "CHŶRMIXAIT TEXITEC";
        subtitle.innerHTML = "Tainit Texitec!";
        wiki.innerHTML = "Pêprônt leouriplexe";
        news.innerHTML = "Môvenônne Texlaid";
        citizen.innerHTML = "Scŷnninne maned";
        tiutro.innerHTML = "Gcoinne t Tiutro";
        kattspeklearn.innerHTML = "Lernne Xacspec";
    }
    else if (language=='English'){
        english.style.border="3px solid #ffffff";
        kattspek.style.border="";
        title.innerHTML = "FEDERATION OF TEKTEK";
        subtitle.innerHTML = "Foreva Tektek!";
        wiki.innerHTML = "Wiki page";
        news.innerHTML = "Tek News Channel";
        citizen.innerHTML = "Become a citizen";
        tiutro.innerHTML = "Join the Tiutro organization";
        kattspeklearn.innerHTML = "Learn Kattspek";
    }
};
