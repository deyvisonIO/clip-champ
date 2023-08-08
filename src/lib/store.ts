import { atom } from "jotai";

interface DateTypes {
  started_at: string | null | undefined,
  ended_at: string | null | undefined
}

const date: DateTypes = {
  started_at: null, 
  ended_at: null, 
}

export const sortAtom = atom("all");
export const dateAtom = atom(date)
