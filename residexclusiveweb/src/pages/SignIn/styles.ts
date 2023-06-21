import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8a764c;
  padding: 2rem;
  border-radius: 1rem;
`;

export const LogoImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: contain;
  border-radius: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const GroupInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors["yellow-300"]};
`;

export const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 0;
  padding-top: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors["yellow-500"]};
  border: 1px solid ${(props) => props.theme.colors["secondary"]};
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  align-content: center;
  width: 100px;

  &:hover {
    background-color: ${(props) => props.theme.colors["yellow-700"]};
  }
`;
