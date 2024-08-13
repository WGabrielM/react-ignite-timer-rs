import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";

import { CyclesContext } from "../../contexts/CyclesContext";

import { HistoryContainer, HistoryList, Status } from "./styles";
import { ptBR } from "date-fns/locale";

export default function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Starts</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>{formatDistanceToNow(new Date(cycle.startDate), {
                  addSuffix: true,
                  locale: ptBR
                })}</td>

                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Completed</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status statusColor="red">Stoped</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="yellow">In Progress</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
