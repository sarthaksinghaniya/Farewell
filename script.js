document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const seniorName = urlParams.get('name');

    const farewellMessages = {
        "Anvit": "Anvit SIR AP THO BEST GS KA AWARD DESERVE KRTE HAIN LIKE I WANT THAT FAREWELL PARTY DESPARETLY BUT KY KRE BACHE HI ESE H BUT STILL SIR HOPE FUTURE ME BHI AP JESE SENIOR AND GS MILLE AND TEAM ALANKAAR MAY RISE LOVE YOU BHAIYA THE BEST POOKIE SIR HIHI miliyega zaroor ...🎓",
        "Hitesh": "Hitesh SIR APSE THO DARTE DARTE HI SEASON NIKAL GYA HEHE BUT STILL SIR THE WAY YOU TREAT US IS BEST LOVED BEING YOUR TEAM HUMARE KHAZANE KE MALIK HEHE SIR HOPE YOUR FUTURE THE BEST AND KBHI MIL SAKE KASH HUM FIR 🌟...",
        "Insha": "Insha MA'AM APSE ZYADA BAATE THO NI HUI BUT BEING THE MODEL OF ALANKAAR AP BHT ACHI H DI HOPE HUME AAGE BHI ESE HI SENIORS TREAT KRE ALWAYS A COOL DI IN MY EYES PARTY PPENDING FAREWELL STILL ):🎨...",
        "Anshika": "Anshika MA'AM TO BE HONEST DI APKI SMILE BHT CUTIE H ,I CAN SAY HE BEST I,ve SEEN IN MY LIFE DI PARTY OF FAREWELL BACHI REH GYI BUT KOI NA TUSI ASI KO MT BHULNA SAD GOOD SENIORS GOING CHOTE BACHO KO CHORKE KE YOUR CHOTA BHAI WILL MISS YOU ALL BE IN TOUCH  ❤️",
        "Abika": "Abika MA'AM , APSE ZYADA BAATE THO N HUI BUT YES AP BHT COOL HO AS A SENIOR FRIENDLY AND HELPY AP KE SATH BEING A Jr WAS THE GOOD EXP WILL MISS YOU DIII YAAD RKIYEGA  🚀..."
    };

    const nicknames = {
        "Anvit": "Pookie Sir",
        "Hitesh": "Strict Teacher",
        "Insha": "Modeling Dii",
        "Anshika": "Cutest Smile Wali Dii",
        "Abika": "Cool Dii"
    };

    if (seniorName) {
        document.getElementById("seniorName").innerText = seniorName;
        typeText(farewellMessages[seniorName]);
        document.getElementById("nicknameList").innerHTML = `<li>${nicknames[seniorName]}</li>`;
    }
});

function typeText(text) {
    let index = 0;
    function typing() {
        if (index < text.length) {
            document.getElementById("typingText").innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 50);
        }
    }
    typing();
}

function submitMessage() {
    alert("apka sandesha has been recorded! 💖");
}