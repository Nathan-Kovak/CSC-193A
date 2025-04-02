function alertHandler() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancyShmancy (){
    alert("FancyShmancy Selected!");
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function boringBetty(){
    alert("BoringBetty Selected!");
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
}

function uppercase(){
    var textAreaContent = document.getElementById("textArea").value;
    var updated = textAreaContent.toUpperCase();
    var sentenceSplit = updated.split(".");
    updated = sentenceSplit.join("-Moo.");

    document.getElementById("textArea").value = updated;
}

