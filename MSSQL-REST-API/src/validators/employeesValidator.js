import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper";

export const validateCreate = [
  check("ID_Contrato").exists().not().isEmpty().isNumeric(),
  check("NomEmp").exists().not().isEmpty(),
  check("APatEmp").exists().not().isEmpty(),
  check("AMatEmp").exists().not().isEmpty(),
  check("EdadEmp").exists().not().isEmpty().isNumeric(),
  check("TelEmp").exists().not().isEmpty(),
  check("Estatus").exists().not().isEmpty().isBoolean(),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];
