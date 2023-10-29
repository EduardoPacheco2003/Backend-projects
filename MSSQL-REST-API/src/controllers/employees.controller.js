import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    let pool = await getConnection();
    const result = await pool.request().query(queries.getAllEmployees);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewEmployee = async (req, res) => {
  const { ID_Contrato, NomEmp, APatEmp, AMatEmp, EdadEmp, TelEmp, Estatus } =
    req.body;

  //console.log(ID_Empleado,ID_Contrato, NomEmp, APatEmp, AMatEmp, EdadEmp, TelEmp, Estatus);
  try {
    let pool = await getConnection();
    await pool
      .request()
      .input("ID_Contrato", sql.Int, ID_Contrato)
      .input("NomEmp", sql.VarChar(50), NomEmp)
      .input("APatEmp", sql.VarChar(20), APatEmp)
      .input("AMatEmp", sql.VarChar(20), AMatEmp)
      .input("EdadEmp", sql.TinyInt, EdadEmp)
      .input("TelEmp", sql.VarChar(15), TelEmp)
      .input("Estatus", sql.Bit, Estatus)
      .query(queries.createNewEmployee);

    res.json({
      ID_Contrato,
      NomEmp,
      APatEmp,
      AMatEmp,
      EdadEmp,
      TelEmp,
      Estatus,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEmployeeById = async (req, res) => {
  
}