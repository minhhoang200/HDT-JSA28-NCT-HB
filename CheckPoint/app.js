let menu = ["rau xào", "thịt luộc", "gà rán"];
let input;
do {
    input = prompt("Mời người dùng nhập vào C,R,U,D").toLowerCase().trim();
    // console.log(menu.indexOf("rau xào"))
    if (input == "c") { menu.push(prompt("Mời người dùng nhập món mới")) }
    if (input == "r") { alert(menu.join(", ")) }
    if (input == "u") {
        let vitriMonAnUpdate = menu.indexOf(prompt("Mời người dùng nhập vào tên món muốn update"));
        menu[vitriMonAnUpdate] = prompt("Mời người dùng nập vào món mới thay thế")
    }
    if (input == "d") {
        let vitriMonAnUpdate = menu.indexOf(prompt("Mời người dùng nhập vào tên món muốn xóa"));
        menu.splice[vitriMonAnUpdate, 1]
    }
    else{
        alert("Sai cú pháp chương trình")
    }


} while (input == "C" || input == "R" || input == "U" || input == "D")
