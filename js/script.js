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
var varDescription = document.getElementById("varDescription");
var tmpDescription = document.getElementById("tmpDescription");
var usrDescription = document.getElementById("usrDescription");
var homeDescription = document.getElementById("homeDescription");
var bootDescription = document.getElementById("bootDescription");
var libDescription = document.getElementById("libDescription");
var optDescription = document.getElementById("optDescription");
var mntDescription = document.getElementById("mntDescription");
var mediaDescription = document.getElementById("mediaDescription");
var srvDescription = document.getElementById("srvDescription");

var nextPage = document.getElementById("nextPage");

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

Var.style.backgroundColor = "orange";
Var.style.left = "1550px";
Var.style.top = "500px";
varDescription.style.display = "none";

tmp.style.backgroundColor = "orange";
tmp.style.left = "50px";
tmp.style.top = "800px";
tmpDescription.style.display = "none";

usr.style.backgroundColor = "orange";
usr.style.left = "350px";
usr.style.top = "800px";
usrDescription.style.display = "none";

home.style.backgroundColor = "orange";
home.style.left = "650px";
home.style.top = "800px";
homeDescription.style.display = "none";

boot.style.backgroundColor = "orange";
boot.style.left = "950px";
boot.style.top = "800px";
bootDescription.style.display = "none";

lib.style.backgroundColor = "orange";
lib.style.left = "1250px";
lib.style.top = "800px";
libDescription.style.display = "none";

opt.style.backgroundColor = "orange";
opt.style.left = "1550px";
opt.style.top = "800px";
optDescription.style.display = "none";

mnt.style.backgroundColor = "orange";
mnt.style.left = "350px";
mnt.style.top = "1100px";
mntDescription.style.display = "none";

media.style.backgroundColor = "orange";
media.style.left = "650px";
media.style.top = "1100px";
mediaDescription.style.display = "none";

srv.style.backgroundColor = "orange";
srv.style.left = "950px";
srv.style.top = "1100px";
srvDescription.style.display = "none";
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

Var.onclick = function varToggle()
{
openDirectory();

Var.style.display = "block";
Var.style.left = "900px";
Var.style.top = "400px";
Var.style.backgroundColor = "red";
varDescription.style.display = "inline";

Var.onclick = function()
{
closeDirectory();

Var.style.backgroundColor = "orange";
Var.style.left = "1550px";
Var.style.top = "500px";
varDescription.style.display = "none";

Var.onclick = function()
{
varToggle();
};

};

};

tmp.onclick = function tmpToggle()
{
openDirectory();

tmp.style.display = "block";
tmp.style.left = "900px";
tmp.style.top = "400px";
tmp.style.backgroundColor = "red";
tmpDescription.style.display = "inline";

tmp.onclick = function()
{
closeDirectory();

tmp.style.backgroundColor = "orange";
tmp.style.left = "50px";
tmp.style.top = "800px";
tmpDescription.style.display = "none";

tmp.onclick = function()
{
tmpToggle();
};

};

};

usr.onclick = function usrToggle()
{
openDirectory();

usr.style.display = "block";
usr.style.left = "900px";
usr.style.top = "400px";
usr.style.backgroundColor = "red";
usrDescription.style.display = "inline";

usr.onclick = function()
{
closeDirectory();

usr.style.backgroundColor = "orange";
usr.style.left = "350px";
usr.style.top = "800px";
usrDescription.style.display = "none";

usr.onclick = function()
{
usrToggle();
};

};

};

home.onclick = function homeToggle()
{
openDirectory();

home.style.display = "block";
home.style.left = "900px";
home.style.top = "400px";
home.style.backgroundColor = "red";
homeDescription.style.display = "inline";

home.onclick = function()
{
closeDirectory();

home.style.backgroundColor = "orange";
home.style.left = "650px";
home.style.top = "800px";
homeDescription.style.display = "none";

home.onclick = function()
{
homeToggle();
};

};

};

boot.onclick = function bootToggle()
{
openDirectory();

boot.style.display = "block";
boot.style.left = "900px";
boot.style.top = "400px";
boot.style.backgroundColor = "red";
bootDescription.style.display = "inline";

boot.onclick = function()
{
closeDirectory();

boot.style.backgroundColor = "orange";
boot.style.left = "950px";
boot.style.top = "800px";
bootDescription.style.display = "none";

boot.onclick = function()
{
bootToggle();
};

};

};

lib.onclick = function libToggle()
{
openDirectory();

lib.style.display = "block";
lib.style.left = "900px";
lib.style.top = "400px";
lib.style.backgroundColor = "red";
libDescription.style.display = "inline";

lib.onclick = function()
{
closeDirectory();

lib.style.backgroundColor = "orange";
lib.style.left = "1250px";
lib.style.top = "800px";
libDescription.style.display = "none";

lib.onclick = function()
{
libToggle();
};

};

};

opt.onclick = function optToggle()
{
openDirectory();

opt.style.display = "block";
opt.style.left = "900px";
opt.style.top = "400px";
opt.style.backgroundColor = "red";
optDescription.style.display = "inline";

opt.onclick = function()
{
closeDirectory();

opt.style.backgroundColor = "orange";
opt.style.left = "1550px";
opt.style.top = "800px";
optDescription.style.display = "none";

opt.onclick = function()
{
optToggle();
};

};

};

mnt.onclick = function mntToggle()
{
openDirectory();

mnt.style.display = "block";
mnt.style.left = "900px";
mnt.style.top = "400px";
mnt.style.backgroundColor = "red";
mntDescription.style.display = "inline";

mnt.onclick = function()
{
closeDirectory();

mnt.style.backgroundColor = "orange";
mnt.style.left = "350px";
mnt.style.top = "1100px";
mntDescription.style.display = "none";

mnt.onclick = function()
{
mntToggle();
};

};

};

media.onclick = function mediaToggle()
{
openDirectory();

media.style.display = "block";
media.style.left = "900px";
media.style.top = "400px";
media.style.backgroundColor = "red";
mediaDescription.style.display = "inline";

media.onclick = function()
{
closeDirectory();

media.style.backgroundColor = "orange";
media.style.left = "650px";
media.style.top = "1100px";
mediaDescription.style.display = "none";

media.onclick = function()
{
mediaToggle();
};

};

};

srv.onclick = function srvToggle()
{
openDirectory();

srv.style.display = "block";
srv.style.left = "900px";
srv.style.top = "400px";
srv.style.backgroundColor = "red";
srvDescription.style.display = "inline";

srv.onclick = function()
{
closeDirectory();

srv.style.backgroundColor = "orange";
srv.style.left = "950px";
srv.style.top = "1100px";
srvDescription.style.display = "none";

srv.onclick = function()
{
srvToggle();
};

};

};

};

nextPage.onclick = function()
{
alert("Page 2 coming soon...");
};