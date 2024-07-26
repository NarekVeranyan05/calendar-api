import { body } from "express-validator";
import { client } from "../../repositories/db";

export const monthNameBodyValidator = body("month")
    .optional({checkFalsy: true})
    .isString().withMessage("entity is not a string")
    .isIn([
        // English
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
        // Russian
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
        // French
        "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
      ]).withMessage("entity is not a month name")