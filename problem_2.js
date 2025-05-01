function sendNotification(email){
    a = email.indexOf("@")
    if (a == -1){
        console.log("Invalid Email address")
    }
    else{
        console.log(email.substring(0,a)+" sent you an email from "+ email.substring(a+1))
    }
}

sendNotification("nadim.naem5@outlook.com")
sendNotification('ziahdph@gmail.com');
sendNotification('farhan34@yahoo.com');
sendNotification('nadim5@outlook.com');
sendNotification('fahim234.hotmail.com');
sendNotification("sadia8icloud.com");