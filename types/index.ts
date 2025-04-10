export type WeekDay =
  | "domingo"
  | "segunda"
  | "terca"
  | "quarta"
  | "quinta"
  | "sexta"
  | "sabado";

export type Subject = {
  name: string;
  score: number;
};

export type ComputedSubject = Subject & {
  relativeWeight: string;
  load: string;
  goal: string;
};

export type SequentialCycleItem = {
  name: string;
  time: number;
};

export type ChartDataItem = {
  name: string;
  value: number;
  subject: string;
};

export type LegendItem = {
  name: string;
  color: string;
};