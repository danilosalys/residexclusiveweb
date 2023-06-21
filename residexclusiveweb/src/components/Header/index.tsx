import React from "react";
import { ContainerHeader } from "./styles";

export const Header = ({ username }: any) => {
  return (
    <ContainerHeader>
      <h1>Bem-vindo, {username}!</h1>
      {/* Botões básicos */}
    </ContainerHeader>
  );
};
