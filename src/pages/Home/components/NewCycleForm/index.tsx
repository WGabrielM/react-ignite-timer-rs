
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from "../CountDown/styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Info the task"),
  minutesAmount: zod
    .number()
    .min(1, "The cycle must be minimum 5 minutes")
    .max(60, "The cycle must be maximum 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export default function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
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
