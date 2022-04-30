import { fireEvent, screen } from "@testing-library/react";
import { setValorInput } from "./setValorInput";

export const validaErroApresentadoEmTela = (
  input: HTMLElement,
  value: string,
  mensagem: string
  ) => {
  setValorInput(input, value);
  fireEvent.blur(input);
  screen.getByText(mensagem);
};