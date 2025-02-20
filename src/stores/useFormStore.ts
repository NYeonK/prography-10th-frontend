import { create } from "zustand";

interface FormState {
  consent: boolean | null;
  info: {
    name: string;
    email: string;
    phone: string;
  };
  job: string | null;

  setConsent: (consent: boolean | null) => void;
  setInfo: (info: FormState["info"]) => void;
  setJob: (job: string | null) => void;

  resetForm: () => void;
}

const initialState = {
  consent: null,
  info: {
    name: "",
    email: "",
    phone: "",
  },
  job: null,
};

export const useFormStore = create<FormState>((set) => ({
  ...initialState,

  setConsent: (consent) => set({ consent }),
  setInfo: (info) => set({ info }),
  setJob: (job) => set({ job }),

  resetForm: () => set(initialState),
}));
