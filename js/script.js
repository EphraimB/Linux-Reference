var parent = document.getElementById("parent");
var bin = document.getElementById("bin");
var sbin = document.getElementById("sbin");
var etc = document.getElementById("etc");
var dev = document.getElementById("dev");
var proc = document.getElementById("proc");
var Var = document.getElementById("var");
var tmp = document.getElementById("tmp");
var usr = document.getElementById("usr");
var home = document.getElementById("home");
var boot = document.getElementById("boot");
var lib = document.getElementById("lib");
var opt = document.getElementById("opt");
var mnt = document.getElementById("mnt");
var media = document.getElementById("media");
var srv = document.getElementById("srv");

var binDescription = document.getElementById("binDescription");
var sbinDescription = document.getElementById("sbinDescription");
var etcDescription = document.getElementById("etcDescription");
var devDescription = document.getElementById("devDescription");
var procDescription = document.getElementById("procDescription");

function openParentDirectory()
{
parent.style.backgroundColor = "red";

bin.style.display = "block";
sbin.style.display = "block";
etc.style.display = "block";
dev.style.display = "block";
proc.style.display = "block";
Var.style.display = "block";
tmp.style.display = "block";
usr.style.display = "block";
home.style.display = "block";
boot.style.display = "block";
lib.style.display = "block";
opt.style.display = "block";
mnt.style.display = "block";
media.style.display = "block";
srv.style.display = "block";
};

function closeParentDirectory()
{
parent.style.backgroundColor = "orange";

bin.style.display = "none";
sbin.style.display = "none";
etc.style.display = "none";
dev.style.display = "none";
proc.style.display = "none";
Var.style.display = "none";
tmp.style.display = "none";
usr.style.display = "none";
home.style.display = "none";
boot.style.display = "none";
lib.style.display = "none";
opt.style.display = "none";
mnt.style.display = "none";
media.style.display = "none";
srv.style.display = "none";

bin.style.backgroundColor = "orange";
bin.style.left = "50px";
bin.style.top = "500px";
binDescription.style.display = "none";

sbin.style.backgroundColor = "orange";
sbin.style.left = "350px";
sbin.style.top = "500px";
sbinDescription.style.display = "none";

etc.style.backgroundColor = "orange";
etc.style.left = "650px";
etc.style.top = "500px";
etcDescription.style.display = "none";

dev.style.backgroundColor = "orange";
dev.style.left = "950px";
dev.style.top = "500px";
devDescription.style.display = "none";

proc.style.backgroundColor = "orange";
proc.style.left = "1250px";
proc.style.top = "500px";
procDescription.style.display = "none";
};

function openDirectory()
{
bin.style.display = "none";
sbin.style.display = "none";
etc.style.display = "none";
dev.style.display = "none";
proc.style.display = "none";
Var.style.display = "none";
tmp.style.display = "none";
usr.style.display = "none";
home.style.display = "none";
boot.style.display = "none";
lib.style.display = "none";
opt.style.display = "none";
mnt.style.display = "none";
media.style.display = "none";
srv.style.display = "none";
};

function closeDirectory()
{
bin.style.display = "block";
sbin.style.display = "block";
etc.style.display = "block";
dev.style.display = "block";
proc.style.display = "block";
Var.style.display = "block";
tmp.style.display = "block";
usr.style.display = "block";
home.style.display = "block";
boot.style.display = "block";
lib.style.display = "block";
opt.style.display = "block";
mnt.style.display = "block";
media.style.display = "block";
srv.style.display = "block";
};

parent.onclick = function toggle()
{
openParentDirectory();

parent.onclick = function()
{
closeParentDirectory();

parent.onclick = function()
{
toggle();
};

};
bin.onclick = function binToggle()
{
openDirectory();

bin.style.display = "block";
bin.style.left = "900px";
bin.style.top = "400px";
bin.style.backgroundColor = "red";
binDescription.style.display = "inline";

bin.onclick = function()
{
closeDirectory();

bin.style.backgroundColor = "orange";
bin.style.left = "50px";
bin.style.top = "500px";
binDescription.style.display = "none";

bin.onclick = function()
{
binToggle();
};

};

};

sbin.onclick = function sbinToggle()
{
openDirectory();

sbin.style.display = "block";
sbin.style.left = "900px";
sbin.style.top = "400px";
sbin.style.backgroundColor = "red";
sbinDescription.style.display = "inline";

sbin.onclick = function()
{
closeDirectory();

sbin.style.backgroundColor = "orange";
sbin.style.left = "350px";
sbin.style.top = "500px";
sbinDescription.style.display = "none";

sbin.onclick = function()
{
sbinToggle();
};

};

};

etc.onclick = function etcToggle()
{
openDirectory();

etc.style.display = "block";
etc.style.left = "900px";
etc.style.top = "400px";
etc.style.backgroundColor = "red";
etcDescription.style.display = "inline";

etc.onclick = function()
{
closeDirectory();

etc.style.backgroundColor = "orange";
etc.style.left = "650px";
etc.style.top = "500px";
etcDescription.style.display = "none";

etc.onclick = function()
{
etcToggle();
};

};

};

dev.onclick = function devToggle()
{
openDirectory();

dev.style.display = "block";
dev.style.left = "900px";
dev.style.top = "400px";
dev.style.backgroundColor = "red";
devDescription.style.display = "inline";

dev.onclick = function()
{
closeDirectory();

dev.style.backgroundColor = "orange";
dev.style.left = "950px";
dev.style.top = "500px";
devDescription.style.display = "none";

dev.onclick = function()
{
devToggle();
};

};

};

proc.onclick = function procToggle()
{
openDirectory();

proc.style.display = "block";
proc.style.left = "900px";
proc.style.top = "400px";
proc.style.backgroundColor = "red";
procDescription.style.display = "inline";

proc.onclick = function()
{
closeDirectory();

proc.style.backgroundColor = "orange";
proc.style.left = "1250px";
proc.style.top = "500px";
procDescription.style.display = "none";

proc.onclick = function()
{
procToggle();
};

};

};

};