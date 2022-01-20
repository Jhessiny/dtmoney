import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Criação de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/21</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdrawal">-R$1.200,00</td>
            <td>Casa</td>
            <td>20/02/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
