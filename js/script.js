var bin = document.getElementById("bin");

bin.onclick = function()
{
var directoryDescription = document.createElement("div");
directoryDescription.setAttribute("class", "directoryDescription");

var filesystem = document.getElementById("filesystem");

filesystem.appendChild(directoryDescription);

var binDescription = document.createTextNode("Contains common Linux user commands, such as ls, sort, date, and chmod")

directoryDescription.appendChild(binDescription);

};