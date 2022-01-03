import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Primer paso creo mi contexto, esto es lo que se va a proveer con los values
const CuentasContext = createContext();
// Segundo paso creo mi context para poder exportar a los children que quieran consumir de este context
export const CuentasConsumer = () => useContext(CuentasContext);
const CuentasProvider = ({ children }) => {
    
    // Inicializo mi monto y mis gastos;
    const [monto, setMonto] = useState(0);
    // Va a ser un array de objetos con un valor y una description ? 
    const [gastos, setGastos] = useState([]);
    // Se utiliza para navegar a un punto en especifico de mi aplicacion
    const navigate = useNavigate();
  
  const modificarMonto = (numero) => {
    setMonto(numero);
    navigate("/cuentas");
    
  };

  const agregarGastos = (consumo) => {
      // Agrego mis consumos a mis gastos
    setGastos([...gastos, consumo]);
    // Calculo el valor de mi monto
    const nuevoMonto = monto - consumo.valor;
    // Actualizo mi monto
    setMonto(nuevoMonto);
  };

  const borrarGasto = (index) => {
    
    // Primero detecto el gasto a devolver
    const montoDevuelto = gastos[index];
    console.log(montoDevuelto)
    // Restablezco mi valor de monto
    const montoRestablecido = (monto + Number(montoDevuelto.valor));
    console.log(montoRestablecido)
    console.log(montoDevuelto.valor)
    setMonto(montoRestablecido);
    // Tercer paso borrar el gasto de mi lista de gastos

      let nuevoArr = gastos.splice(index, 1);
      console.log(nuevoArr)
      // Cuarto actualizo mis gastos
      setGastos(nuevoArr);
    
  };

  const resetarCuentas = () => {
    setMonto(0);
    setGastos([]);
    navigate({to:'/'})
  }




  return (
    <CuentasContext.Provider
      value={{monto, gastos, modificarMonto, agregarGastos, borrarGasto, resetarCuentas}}
    >
      {children}
    </CuentasContext.Provider>
  );
};
// Esto lo exporto a las rutas para que todos mis componentes puedan usar las funciones de este context
export default CuentasProvider;
