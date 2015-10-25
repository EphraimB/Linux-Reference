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

};