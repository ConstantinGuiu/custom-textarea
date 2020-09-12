var oDoc, sDefTxt;

loaded();

function loaded() {
    oDoc = document.getElementById("textArea");
    sDefTxt = oDoc.innerHTML;
}

function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    oDoc.focus();
}