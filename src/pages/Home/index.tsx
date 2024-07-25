import * as zod from "zod";
import { useContext } from "react";
import { HandPalm, Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import CountDown from "./components/CountDown";
import NewCycleForm from "./components/NewCycleForm";
import { CyclesContext } from "../../contexts/CyclesContext";

import {
  HomeContainer,
  StopCountDownButton,
  StartCountDownButton,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Info the task"),
  minutesAmount: zod
    .number()
    .min(5, "The cycle must be minimum 5 minutes")
    .max(60, "The cycle must be maximum 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export default function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, /*reset*/ } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  /**
   * Prop Drilling -> When we have to MUCH props ONLY for communication between components
   * Context API -> Allow sharing information among several components at the same time
   */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Stop
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Start
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
