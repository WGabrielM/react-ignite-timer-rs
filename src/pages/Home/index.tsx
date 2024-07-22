import * as zod from "zod";
import { createContext, useState } from "react";
import { HandPalm, Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import CountDown from "./components/CountDown";
import NewCycleForm from "./components/NewCycleForm";

import {
  HomeContainer,
  StopCountDownButton,
  StartCountDownButton,
} from "./styles";

interface Cycle {
  id: string;
  task: string;
  startDate: Date;
  finishedDate?: Date;
  minutesAmount: number;
  interruptedDate?: Date;
}

interface CyclesContextType {
  amountSecondsPassed: number;
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Info the task"),
  minutesAmount: zod
    .number()
    .min(5, "The cycle must be minimum 5 minutes")
    .max(60, "The cycle must be maximum 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export default function Home() {

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

 

  const task = watch("task");
  const isSubmitDisabled = !task;

  /**
   * Prop Drilling -> When we have to MUCH props ONLY for communication between compoments
   * Context API -> Allow sharing information among several components in the same time
   */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
       
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptCycle} type="button">
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
