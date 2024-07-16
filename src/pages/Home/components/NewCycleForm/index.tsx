import { useContext } from "react";

import { CyclesContext } from "../..";

import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from "../NewCycleForm/styles";
import { useFormContext } from "react-hook-form";

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I will work in</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Give a name for a project"
        disabled={!!activeCycle}
        // Controlled component
        // value={task}
        // onChange={(event) => setTask(event.target.value)}

        // Register return method to work with a form like onChange,
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
        <option value="Banana"></option>
      </datalist>

      <label htmlFor="minutesAmount">during</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
