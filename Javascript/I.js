/*var list= [ ]; 

 for (var i=0;i<100;i=i+1){
     list.push (i);
 }

 var sum=0;
 for (var i=0; i< list.length; i=i+1){
     sum=sum+ list[i];
 }
var avg= sum/list.length;
document.write ("the average is:"+avg);
list.splice(0,0,10); 
document.write (list[0]);*/

var list = [];

for (var i = 0; i < 100; i = i + 1) {
    list.push(i);
}

var list2 = [];
while (list.length > 0) {
    var greatest = 0;
    for (var i = 1; i < list.length; i++) {
        if (list[greatest] < list[i]) {
            greatest = i;
        }
    }
    list2.push(list[greatest]);
    list.splice(greatest, 1);
}
for (var i = 0; i < 100; i = i + 1) {
    document.write(list2[i]);
    document.write("</br>");
}