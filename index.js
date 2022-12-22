
//whithout pramater

/*var num1 = Number (prompt("Enter your Number:"));
  var num2 = Number (prompt("Enter your second Number:"));
  var num3 = Number (prompt("Enter your Thard Number:"));


function mathmatic()
{
  
  document.write("Add is: " + (num1+num2+num3) + "<br/>" );
  document.write("sub is: " + (num1-num2-num3) + "<br/>");
  document.write("Mul is: " + (num1*num2*num3) + "<br/>");
  document.write("Division is" + (num1 / num2/ num3) + "<br/>");

}
mathmatic()*/

//with pramater

/*var num1 = Number (prompt("Enter your Number:"));
var num2 = Number (prompt("Enter your second Number:"));
var num3 = Number (prompt("Enter your Thard Number:"));

  function mathmatics(num1, num2, num3)
  {
    document.write("Add is: " + (num1+num2+num3) + "<br/>" );
    document.write("sub is: " + (num1-num2-num3) + "<br/>");
    document.write("Mul is: " + (num1*num2*num3) + "<br/>");
    document.write("Division is" + (num1 / num2/ num3) + "<br/>");
  
  }

  mathmatics(num1, num2, num3);*/
   
  //input user username, password with pramater
 /* var username = String (prompt("enter your username"));
  var password = String (prompt("enter your password"));
  
  function login (username, password)
  {
    document.write("username: " + username + "<br/>");
    document.write("password: " + password);
  }
  login (username, password);*/
   
   //IIFES function
  
  
  
  /*(function login (username, password)
  {
    var username = String (prompt("enter your username"));
    var password = String (prompt("enter your password"));
    
    document.write("username: " + username + "<br/>");
    document.write("password: " + password);
  })();*/

  //Aray

  //var names =[" ritu", " arifa", " nabila", " ruku", " rifa"]
  /*document.write("Index 1 Name is: " + names );
  document.write(names[0] + "<br/>");
  document.write(names[1] + "<br/>");
  document.write(names[2] + "<br/>");
  document.write(names[3] + "<br/>");
  document.write(names[4] + "<br/>");*/

  /*for(var i = 0; i<names.length; i++)
  {
    document.write(names[i]);
  }*/

  var names = new Array(5);

  for(var i = 0; i<names.length; i++)
  names[i] = prompt("enter " + i + "number");

  for(var i = 0; i<names.length; i++)
  document.write(names[i] + "<br/>");







/*function squre()
{
    var num = 16;
    document.write(" Result is " + num * num);
}
squre();*/



/*function squre ()
{

    var num = 16;
    console.log(num* num);
}
squre()*/