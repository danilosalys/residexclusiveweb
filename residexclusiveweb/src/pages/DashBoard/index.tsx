import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Container, MiddleContent } from "./styles";

export const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Header username={"Cristiano"} />
      <MiddleContent>
        <Sidebar onOptionSelect={handleOptionSelect} />
        <Content selectedOption={selectedOption} />
      </MiddleContent>
    </Container>
  );
};
