// function SendMail() {
//     console.log("printf");
//     var params = {
//         from_name: document.getElementById("fullName").value,
//         email_id: document.getElementById("email_id").value,
//         message: document.getElementById("message").value
//     }
//     emailjs.send("service_v1ng3dg", "template_f2e1lxi", params).then(function (res) {
//         alert("Success!" + res.status);
//     })
// }

function SendMail() {
    console.log("Function called");
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    console.log("Params:", params);

    emailjs.send("service_v1ng3dg", "template_f2e1lxi", params)
        .then(function (res) {
            console.log("Email sent successfully:", res);
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            console.error("Failed to send email:", error);
        });
}

