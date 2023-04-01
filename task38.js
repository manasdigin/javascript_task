function validate(email){
    let mail_format=/^\S+@\S+\.+/;
    if (mail_format.test(email)){
        console.log("the email address is valid")
    }
    else{
        console.log("the email is not invalid")
    }
}
validate("manasdavidraj@gmail.com")
validate("manasdavidraj@gmail.com")
validate("manasdavidraj@gmail.com")
validate("manasdavidraj@gmail.")