import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  TaskInput,
  Separator,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  CountDownContainer,
  StartCountDownButton,
} from "./styles";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            // Controlled component
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Banana"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={!task} type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
