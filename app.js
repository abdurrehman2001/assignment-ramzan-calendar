var roza = +prompt("Enter Your Roza")
var day = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday",];
var englishDates = ["14 April 2021","15 April 2021","16 April 2021","17 April 2021","18 April 2021","19 April 2021","20 April 2021","21 April 2021","22 April 2021","23 April 2021","24 April 2021","25 April 2021","26 April 2021","27 April 2021","28 April 2021","29 April 2021","30 April 2021","1 May,2020","2 May,2020","3 May,2020","4 May,2020","5 May,2020","6 May,2020","7 May,2020","8 May,2020","9 May,2020","10 May,2020","11 May,2020","12 May,2020","13 May,2020","14 May,2020"];
var num = ["1st Roza", "2nd Roza", "3rd Roza", "4th Roza", "5th Roza", "6th Roza", "7th Roza", "8th Roza", "9th Roza", "10th Roza", "11th Roza", "12th Roza", "13th Roza", "14th Roza", "15th Roza", "16th Roza", "17th Roza", "18th Roza", "19th Roza", "20th Roza", "21th Roza", "22th Roza", "23th Roza", "24th Roza", "25th Roza", "26th Roza", "27th Roza", "28th Roza", "29th Roza", "30th Roza"];
var sehri = ["04:51AM", "04:50AM", "04:49AM", "04:48AM", "04:47AM", "04:46AM", "04:45AM", "04:44AM", "04:43AM", "04:42AM", "04:41AM", "04:40AM", "04:39AM", "04:38AM", "04:37AM", "04:36AM", "04:35AM", "04:34AM", "04:33AM", "04:32AM", "04:31AM", "04:30AM", "04:29AM", "04:28AM", "04:28AM", "04:27AM", "04:26AM", "04:25AM", "04:24AM", "04:24AM"];
var iftari = ["06:55PM", "06:55PM", "06:56PM", "06:56PM", "06:57PM", "06:57PM", "06:57PM", "06:58PM", "06:58PM", "06:59PM", "06:59PM", "07:00PM", "07:00PM", "07:01PM", "07:01PM", "07:02PM", "07:02PM", "07:03PM", "07:03PM", "07:04PM", "07:04PM", "07:05PM", "07:05PM", "07:06PM", "07:06PM", "07:07PM", "07:07PM", "07:08PM", "07:08PM", "07:09PM"];
if(roza === 0){
    alert("Correct Enter Your Roza")
}
else if(roza < 31){
    document.write("<div class = mno>" + "<h1>" + "Ramzan Mubarak"+ "</h1>" + "</div>")
    document.write("<div class = abc>"+ "<h2>" + num[--roza] + "</h2>" + "<br />" + " <h4>" + day[roza] + " " + englishDates[roza] + "<br/>" + "Serhri Time Is " + sehri[roza] + "<br />" + "Iftari Time Is " + iftari[roza] + "</h4>" + "</div>");
}
else{
    document.write("<div class = abc>" + "<h1>" + "Eid Mubarak"+ "</h1>" + "</div>")
};