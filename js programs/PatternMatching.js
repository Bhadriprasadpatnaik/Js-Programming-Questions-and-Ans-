var m, n;
for(m=1;m<=5;m++)
{
for(n=m;n<=5;n++)
{
document.write(""+n+" ");
}
document.write('<br/>');
}
// for star pattern reverse
var m, n;
for(m=5;m>=1;m--)
{
for(n=1;n<=m;n++)
{
document.write('*');
}
document.write('<br/>');
}

// square pattern
let num = 5; 
let string = "";
for(let i = 0; i < num; i++) { 
  for(let j = 0; j < num; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);
