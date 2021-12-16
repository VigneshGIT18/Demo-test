var table=document.createElement('table');
table.setAttribute('class','table');


var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');


var tr=document.createElement('tr');


var th1=createthtd('th','firstname');
var th2=createthtd('th','lastname');
tr.append(th1,th2);
thead.append(tr);


var tbody=document.createElement('tbody');

var tr=document.createElement('tr');



var td1=createthtd('td','john');
var td2=createthtd('td','doe');
tr.append(td1,td2);
tbody.append(tr);
table.append(thead,tbody);


var tbody=document.createElement('tbody');

var tr=document.createElement('tr');



var td3=createthtd('td','jacob');
var td4=createthtd('td','Thornton');
tr.append(td3,td4);
tbody.append(tr);
table.append(thead,tbody);


var tbody=document.createElement('tbody');

var tr=document.createElement('tr');



var td5=createthtd('td','Larry');
var td6=createthtd('td','the Bird');
tr.append(td5,td6);
tbody.append(tr);
table.append(thead,tbody);


var tbody=document.createElement('tbody');

var tr=document.createElement('tr');



var td7=createthtd('td','Namjoon');
var td8=createthtd('td','Kim');
tr.append(td7,td8);
tbody.append(tr);
table.append(thead,tbody); 


var tbody=document.createElement('tbody');

var tr=document.createElement('tr');



var td9=createthtd('td','Jungkook');
var td10=createthtd('td','Jeon');
tr.append(td9,td10);
tbody.append(tr);
table.append(thead,tbody);






document.body.append(table);






function createthtd(elementname,value){
var element=document.createElement(elementname);
element.innerHTML=value;
return element;
}



