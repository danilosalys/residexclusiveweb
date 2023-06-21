import React from "react";
import { ContainerContent } from "./styles";

export const Content = ({ selectedOption }: any) => {
  // Renderize o conteúdo com base na opção selecionada
  const renderContent = () => {
    switch (selectedOption) {
      case "opcao1":
        return <h2>Conteúdo da opção 1</h2>;
      case "opcao2":
        return <h2>Conteúdo da opção 2</h2>;
      // Adicione mais cases conforme necessário
      default:
        return <h2>Selecione uma opção</h2>;
    }
  };

  return <ContainerContent>{renderContent()}</ContainerContent>;
};
