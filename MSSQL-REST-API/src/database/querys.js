export const queries = {
  getAllEmployees: "SELECT * FROM Empleados",
  createNewEmployee:
    "INSERT INTO Empleados (ID_Contrato,NomEmp,APatEmp,AMatEmp,EdadEmp,TelEmp,Estatus) VALUES (@ID_Contrato,@NomEmp,@APatEmp,@AMatEmp,@EdadEmp,@TelEmp,@Estatus)",
};
