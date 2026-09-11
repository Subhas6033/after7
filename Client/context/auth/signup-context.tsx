"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SignupData = {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
  profilePhoto: File | null;
  profileAvatar: string | null;
  interests: string[];
  meetPreference: "anyone" | "similar-age & gender";
  gender: "Male" | "Female" | "Others" | "";
};

const initialSignupData: SignupData = {
  name: "",
  email: "",
  password: "",
  dateOfBirth: "",
  profilePhoto: null,
  profileAvatar: null,
  interests: [],
  meetPreference: "similar-age & gender",
  gender: "",
};

type SignupContextValue = {
  data: SignupData;

  updateData: (patch: Partial<SignupData>) => void;

  setField: <K extends keyof SignupData>(
    field: K,
    value: SignupData[K],
  ) => void;

  resetSignup: () => void;

  isStepOneComplete: boolean;
  isStepTwoComplete: boolean;
  isComplete: boolean;
};

const SignupContext = createContext<SignupContextValue | undefined>(undefined);

type SignupProviderProps = {
  children: ReactNode;
};

export function SignupProvider({ children }: SignupProviderProps) {
  const [data, setData] = useState<SignupData>(initialSignupData);

  const updateData = useCallback((patch: Partial<SignupData>) => {
    setData((current) => ({
      ...current,
      ...patch,
    }));
  }, []);

  const setField = useCallback(
    <K extends keyof SignupData>(field: K, value: SignupData[K]) => {
      setData((current) => ({
        ...current,
        [field]: value,
      }));
    },
    [],
  );

  const resetSignup = useCallback(() => {
    setData(initialSignupData);
  }, []);

  const isStepOneComplete =
    data.name.trim().length >= 2 &&
    data.email.trim().length > 0 &&
    data.password.length >= 8 &&
    data.dateOfBirth.length > 0;

  const isStepTwoComplete =
    data.interests.length > 0 &&
    data.meetPreference.length > 0 &&
    data.gender !== "";

  const isComplete = isStepOneComplete && isStepTwoComplete;

  const value = useMemo<SignupContextValue>(
    () => ({
      data,
      updateData,
      setField,
      resetSignup,
      isStepOneComplete,
      isStepTwoComplete,
      isComplete,
    }),
    [
      data,
      updateData,
      setField,
      resetSignup,
      isStepOneComplete,
      isStepTwoComplete,
      isComplete,
    ],
  );

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}

export function useSignup(): SignupContextValue {
  const context = useContext(SignupContext);

  if (!context) {
    throw new Error("useSignup must be used inside SignupProvider");
  }

  return context;
}
