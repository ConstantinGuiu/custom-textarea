var oDoc, sDefTxt;

loaded();

function loaded() {
    oDoc = document.querySelector("textArea");
    sDefTxt = oDoc.innerHTML;
}

function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    oDoc.focus();
}