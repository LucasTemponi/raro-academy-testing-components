import { fireEvent, screen } from "@testing-library/react";
import { setValorInput } from "./setValorInput";

export const validaConfirmacaoNaoEmTela = (
  inputSenha: HTMLElement,
  valueSenha: string,
  inputConfirmacao: HTMLElement,
  mensagem: string
) => {
  setValorInput(inputSenha, valueSenha);
  setValorInput(inputConfirmacao,valueSenha)
  fireEvent.blur(inputConfirmacao);
  const validacao = screen.queryByText(mensagem);
  expect(validacao).not.toBeInTheDocument();
};
