import { fireEvent, screen } from "@testing-library/react";
import { setValorInput } from "./setValorInput";

export const validaConfirmacaoErroEmTela = (
  inputSenha: HTMLElement,
  valueSenha: string,
  inputConfirmacao: HTMLElement,
  mensagem: string
) => {
  setValorInput(inputSenha, valueSenha);
  fireEvent.blur(inputConfirmacao);
  screen.getByText(mensagem);
};


