const names = ["Saab", "Volvo", "Filip", "Carl", "Billy", "Frank", "Eric", "Yormu", "Jeff", "Klyle"];

function changeH1Text(){
    const randomElement =Math.floor(Math.random() * names.length);
    document.getElementById("heading").innerHTML = names[randomElement];
}
