function selectLanguage(language){
    const kattspek = document.getElementById("kattspek");
    const english= document.getElementById("english");

    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
	
	const kattrules = document.getElementById("kattrules");
	const kattwords = document.getElementById("kattwords");
	const home = document.getElementById("home");

    if (language=='Kattspek'){
        kattspek.style.border = "3px solid #ffffff";
        english.style.border="";
        title.innerHTML = "XACSPEC";
        subtitle.innerHTML = "Tainit Texitec!";
		
		home.innerHTML = "Hôuchŷr";
		
        kattrules.innerHTML = "Laichônst, Laisxc, ets.";
		kattwords.innerHTML = "Chŷrplexe eae Werdêsõ";
    }
    else if (language=='English'){
        english.style.border="3px solid #ffffff";
        kattspek.style.border="";
        title.innerHTML = "KATTSPEK";
        subtitle.innerHTML = "Foreva Tektek!";
        
		home.innerHTML = "Home";
		
		kattrules.innerHTML = "Grammar, Orthography, etc.";
		kattwords.innerHTML = "Spreadsheet of Words";
    }
};
