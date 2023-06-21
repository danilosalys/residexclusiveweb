import React, { useState } from "react";
import { ContainerSideBar } from "./styles";

export const Sidebar = ({ onOptionSelect }: any) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <ContainerSideBar>
      <div onClick={() => handleOptionClick("opcao1")}>Teste 1</div>
      <div onClick={() => handleOptionClick("opcao2")}>Teste 2</div>
    </ContainerSideBar>
  );
};
