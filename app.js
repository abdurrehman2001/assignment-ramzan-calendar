// var serhri = [ 4 + ":" + 75 + "am" , 8 + ":" + 5 + "am" ] 
// var iftari = [8 + ":" + 80 + "pm"]
// // document.write("sehri time"  +  serhri[1] +" "+ "iftari time" + iftari)
// var enter = +prompt("search")
// // alert("sehri time"  +  serhri[1] +" "+ "iftari time" + iftari)
// if (enter === 1){
// alert("sehri time"  +  serhri[1] +" "+ "iftari time" + iftari)
// } 
// else if(enter === 2){
//     alert('roza nh h')
// }
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var s_t = ["0" + 4 + ":" + 53 + "am", '0' + 4 + ":" + 52 + "am", '0' + 4 + ":" + 51 + "am", '0' + 4 + ":" + 50 +"am", '0' + 4 + ":" + 49 + "am", '0' + 4 + ":" + 48 + "am", '0' + 4 + ":" + 46 +"am", '0'+ 4 + ":" + 45 + "am", '0' + 4 + ":" + 44 + "am", '0' + 4 + ":" + 43 + "am", '0' + 4 + ":" + 42 + "am", '0' + 4 + ":" + 41 +"am", '0' + 4 + ":" + 40 + "am", '0' + 4 + ":" + 39 + "am", '0' + 4 + ":" + 38 + "am", '0' + 4 + ":" + 37 + "am", '0' + 4 + ":" + 36 + "am", '0' + 4 + ":" + 35 + "am", '0' + 4 + ":" + 34 + "am", '0' + 4 + ":" + 33 + "am", '0' + 4 + ":" + 32 + "am", '0' + 4 + ":" + 31 + "am", '0' + 4 + ":" + 30 +"am", '0' + 4 + ":" + 29 +"am", '0' + 4 + ":" + 28 + "am", '0' + 4 + ":" + 27 + "am", '0' + 4 + ":" + 26 + "am", '0' + 4 + ":" + 25 + "am", '0' + 4 + ":" + 24 +"am"];
var i_t = ['0' + 6 + ":" + 54 + "pm", '0' + 6 + ":" + 55 + "pm", '0' + 6 + ":" + 56 + "pm", '0' + 6 + ":" + 57 +"pm", '0' + 6 + ":" + 58 + "pm", '0' + 6 + ":" + 59 + "pm", '0' + 7 + ":" + '0' + 0 + "pm", '0' + 7 + ":" + '0' + 1 + "pm", '0' + 7 + ":" + '0' + 2 +"pm", '0' + 7 + ":" + '0' + 3 +"pm", '0' + 7 + ":" + '0' + 4 + "pm", '0' + 7 + ":" + '0' + 5 + "pm", '0' + 7 + ":" + '0' + 6 + "pm", '0' + 7 + ":" + '0' + 7 + "pm", '0' + 7 + ":" + '0' + 8 + "pm", '0' + 7 + ":" + '0' + 9 + "pm", '0' + 7 + ":" + 10 + "pm"];
var e_d = [14  + " " + "April" + " " + 2021, 15 +" " + "April" + " "+ 2021, 16 + " " + "April" + " "+ 2021, 17 + " " + "April" + " " + 2021, 18 + " " + "April" + " " + 2021, 19 + " " + "April" + " " + 2021, 20 + " " + "April" + " " + 2021, 21 + " " + "April" + " " + 2021, 22 + " " + "April" + " " + 2021, 23 + " " + "April" + " " + 2021, 24 + " " + "April" + " " + 2021, 25 + " " + "April" + " " + 2021, 26 + " " + "April" + " " + 2021, 27 + " " + "April" + " " + 2021, 28  + " " + "April" + " " + 2021, 29 + " " + "April" + " " + 2021, 30 + " " + "April" + " " + 2021, 01 + " " + "May" + " " + 2021, 02 + " " + "May" + " " + 2021, 03 + " " + "May" + " " + 2021, 04 + " " + "May" + " " + 2021, 05 + " " + "May" + " " + 2021, 06 + " " + "May" + " " + 2021, 07 + " " + "May" + " " + 2021, 08 + " " + "May" + " " + 2021, 09 + " " + "May" + " " + 2021, 10 + " " + "May" + " " + 2021, 11 + " " + "May" + " " + 2021, 12 + " " + "May" + " " + 2021, 13 + " " + "May" + " " + 2021, 14 + " " + "May" + " " + 2021]; 

var roza = +prompt("Enter Your Roza");
if(roza === 1){
    alert(day[2] +" " + e_d[0] + "\n" + " " + "Sehri Time" + " " + s_t[0] + "\n" + " " + "Iftari Time" + " " + i_t[0])
}
else if (roza === 2){
    alert(day[3] +" " + e_d[1] + "\n" + " " + "Sehri Time" + " " + s_t[1] + "\n" + " " + "Iftari Time" + " " + i_t[1])
}
else if (roza === 3){
    alert(day[4] +" " + e_d[2] + "\n" + " " + "Sehri Time" + " " + s_t[2] + "\n" + " " + "Iftari Time" + " " + i_t[2])
}
else if (roza === 4){
    alert(day[5] +" " + e_d[3] + "\n" + " " + "Sehri Time" + " " + s_t[3] + "\n" + " " + "Iftari Time" + " " + i_t[3])
}
else if (roza === 5){
    alert(day[6] +" " + e_d[4] + "\n" + " " + "Sehri Time" + " " + s_t[4] + "\n" + " " + "Iftari Time" + " " + i_t[4])
}
else if (roza === 6){
    alert(day[0] +" " + e_d[5] + "\n" + " " + "Sehri Time" + " " + s_t[5] + "\n" + " " + "Iftari Time" + " " + i_t[5])
}
else if (roza === 7){
    alert(day[1] +" " + e_d[6] + "\n" + " " + "Sehri Time" + " " + s_t[6] + "\n" + " " + "Iftari Time" + " " + i_t[6])
}
else if (roza === 8){
    alert(day[2] +" " + e_d[7] + "\n" + " " + "Sehri Time" + " " + s_t[7] + "\n" + " " + "Iftari Time" + " " + i_t[7])
}
else if (roza === 9){
    alert(day[3] +" " + e_d[8] + "\n" + " " + "Sehri Time" + " " + s_t[7] + "\n" + " " + "Iftari Time" + " " + i_t[7])
}
else if (roza === 10){
    alert(day[4] +" " + e_d[9] + "\n" + " " + "Sehri Time" + " " + s_t[9] + "\n" + " " + "Iftari Time" + " " + i_t[9])
}
else if (roza === 11){
    alert(day[5] +" " + e_d[10] + "\n" + " " + "Sehri Time" + " " + s_t[10] + "\n" + " " + "Iftari Time" + " " + i_t[10])
}
else if (roza === 12){
    alert(day[6] +" " + e_d[11] + "\n" + " " + "Sehri Time" + " " + s_t[11] + "\n" + " " + "Iftari Time" + " " + i_t[11])
}
else if (roza === 13){
    alert(day[0] +" " + e_d[12] + "\n" + " " + "Sehri Time" + " " + s_t[12] + "\n" + " " + "Iftari Time" + " " + i_t[12])
}
else if (roza === 14){
    alert(day[1] +" " + e_d[13] + "\n" + " " + "Sehri Time" + " " + s_t[13] + "\n" + " " + "Iftari Time" + " " + i_t[13])
}
else if (roza === 15){
    alert(day[2] +" " + e_d[14] + "\n" + " " + "Sehri Time" + " " + s_t[14] + "\n" + " " + "Iftari Time" + " " + i_t[14])
}
else if (roza === 16){
    alert(day[3] +" " + e_d[15] + "\n" + " " + "Sehri Time" + " " + s_t[15] + "\n" + " " + "Iftari Time" + " " + i_t[15])
}
else if (roza === 17){
    alert(day[4] +" " + e_d[16] + "\n" + " " + "Sehri Time" + " " + s_t[16] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 18){
    alert(day[5] +" " + e_d[17] + "\n" + " " + "Sehri Time" + " " + s_t[17] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 19){
    alert(day[6] +" " + e_d[18] + "\n" + " " + "Sehri Time" + " " + s_t[18] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 20){
    alert(day[0] +" " + e_d[19] + "\n" + " " + "Sehri Time" + " " + s_t[19] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 21){
    alert(day[1] +" " + e_d[20] + "\n" + " " + "Sehri Time" + " " + s_t[20] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 22){
    alert(day[2] +" " + e_d[21] + "\n" + " " + "Sehri Time" + " " + s_t[21] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 23){
    alert(day[3] +" " + e_d[22] + "\n" + " " + "Sehri Time" + " " + s_t[22] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 24){
    alert(day[4] +" " + e_d[23] + "\n" + " " + "Sehri Time" + " " + s_t[23] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 25){
    alert(day[5] +" " + e_d[24] + "\n" + " " + "Sehri Time" + " " + s_t[24] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 26){
    alert(day[6] +" " + e_d[25] + "\n" + " " + "Sehri Time" + " " + s_t[25] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 27){
    alert(day[0] +" " + e_d[26] + "\n" + " " + "Sehri Time" + " " + s_t[26] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 28){
    alert(day[1] +" " + e_d[27] + "\n" + " " + "Sehri Time" + " " + s_t[27] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 29){
    alert(day[2] +" " + e_d[28] + "\n" + " " + "Sehri Time" + " " + s_t[28] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if (roza === 30){
    alert(day[3] +" " + e_d[29] + "\n" + " " + "Sehri Time" + " " + s_t[28] + "\n" + " " + "Iftari Time" + " " + i_t[16])
}
else if(roza > 30){
    alert("Roze 29 ya 30 hi hote hen is se zada nahi hote agr apko zyada rakhne ka shok hai to phir ap rakho khushi se hamari taraf se bhi ap rakh lena....")
}
else{
    alert("Roza laga hai kya............")
};