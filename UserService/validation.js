const { body, query, param } = require("express-validator");
exports.validate = (method) => {
    switch (method) {
        case "userRegister":
            {
                return [
                    body("first_name", "First Name cannot be empty.").exists().notEmpty(),
                    body("last_name", "Last Name cannot be empty.").exists().notEmpty(),
                    body("email", "Email cannot be empty").exists().notEmpty(),
                    body("email", "Invalid email").isEmail(),
                    body("password", "Password should have min 6 and max 15 characters.")
                        .exists()
                        .isLength({ min: 6, max: 15 }),
                ];
            }
        case "userLogin":
            {
                return [
                    body("email", "Email cannot be empty").exists().notEmpty(),
                    body("email", "Invalid email").isEmail(),
                    body("password", "Password should have min 6 and max 15 characters.")
                        .exists()
                        .isLength({ min: 6, max: 15 }),
                ];
            }
        case "resetPassword":
            {
                return [
                    body("email", "Email ID cannot be empty").exists().notEmpty(),
                    body("email", "Invalid Email").isEmail(),
                    body("new_password", "Password should have min 6 and max 15 characters.")
                        .exists()
                        .isLength({ min: 6, max: 15 }),
                ];
            }
        case "changePassword":
            {
                return [
                    body("old_password", "Old Password should have min 6 and max 15 characters.").exists().isLength({ min: 6, max: 15 }),
                    body("new_password", "New Password should have min 6 and max 15 characters.").exists().isLength({ min: 6, max: 15 }),
                ];
            }
        case "profileUpdate":
            {
                return [
                    body("first_name", "First Name cannot be empty.").optional().notEmpty(),
                    body("last_name", "Last Name cannot be empty.").optional().notEmpty()
                ];
            }
    }
}