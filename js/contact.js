function sendEmail(){
    Email.send({
        SecureToken : "a738e7a3-b265-4ecf-8487-a88056c2b603",
        To : document.getElementById("email").value,
        From : 'Bahadir47Eker@Gmail.com',
        Subject : document.getElementById("subject").value,
        Body : "Email : " + document.getElementById("email").value
            + "<br> Betreff : " + document.getElementById("reference").value
    }).then(
    message => alert(message)
    );
}