class ValidatorUtil {
    static validateUsername(username) {
        if (username.length < 4) {
            return "Username must be at least 4 characters long!";
        }

        if (!/^[a-z0-9]+$/.test(username)) {
            return "Username must contain only lowercase letters and numbers!";
        }

        if (!/[a-z]/.test(username)) {
            return "Username must contain at least one lowercase letter!";
        }

        return null;
    }

    static validatePassword(password) {
        if (password.length >= 8) {
            if (!/[A-Z]/.test(password)) {
                return "Password must contain at least one uppercase letter";
            }
            if (!/[a-z]/.test(password)) {
                return "Password must contain at least one lowercase letter";
            }
            if (!/\d/.test(password)) {
                return "Password must contain at least one digit";
            }
            if (!/[@$!%*?&]/.test(password)) {
                return "Password must contain at least one special character (@, $, !, %, *, ?, &)";
            }
            return null;
        } else {
            return "Password must be at least 8 characters long";
        }
    }

    static validateForm(username, email, password) {
        const usernameValidationMessage = ValidatorUtil.validateUsername(username.value);
        if (usernameValidationMessage) {
            return { element: username, message: usernameValidationMessage };
        }

        if (!/\S+@\S+\.\S+/.test(email.value)) {
            return { element: email, message: 'Invalid email format. Please use a valid email address (e.g., user@example.com)' };
        }

        const passwordValidationMessage = ValidatorUtil.validatePassword(password.value);
        if (passwordValidationMessage) {
            return { element: password, message: passwordValidationMessage };
        }

        return null; // Indicates the form is valid
    }
}

export default ValidatorUtil;
