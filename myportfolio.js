// validation
function heyy(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var message = document.getElementById("messagee").value;


    console.log("name;"+name);
    console.log("mail;"+email);
    console.log("messagee;"+message);
    

    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('messagee').value='';

}