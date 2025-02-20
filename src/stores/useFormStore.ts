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
}

export const useFormStore = create<FormState>((set) => ({
  consent: null,
  info: {
    name: "",
    email: "",
    phone: "",
  },
  job: null,

  setConsent: (consent) => set({ consent }),
  setInfo: (info) => set({ info }),
  setJob: (job) => set({ job }),
}));
