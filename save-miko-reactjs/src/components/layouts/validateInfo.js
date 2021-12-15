export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    //Email
    if (!values.email) {
        errors.email = "Email required";
    } else if (!/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(values.email))
    {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.password2) {
        errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match";
    }

    return errors;

}
