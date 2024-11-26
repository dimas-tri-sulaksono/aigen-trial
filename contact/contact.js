function sendEmail(){
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let emaiReceiver = "sulaksono.works@gmail.com";

    // untuk membuat element html <a> baru
    let a = document.createElement("a");
    a.href = `mailto:${emaiReceiver}?subject=${subject}&body=${message}`;
    a.target ="_blank";
    a.click(); //trigger fungsi klik
}