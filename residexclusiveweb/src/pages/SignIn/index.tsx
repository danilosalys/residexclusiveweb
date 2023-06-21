import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Container,
  LoginContainer,
  FormContainer,
  GroupInput,
  InputContainer,
  Input,
  EyeIcon,
  Button,
  LogoImage,
} from "./styles";
import { useForm } from "react-hook-form";
import Logo from "../../assets/images/logo.jpg";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <LogoImage src={Logo} />
      <LoginContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <GroupInput>
            <InputContainer>
              Usúario:
              <Input
                type="text"
                {...register("user", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.user && <span>E-mail inválido</span>}
            </InputContainer>
            <InputContainer>
              Senha:
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
              />
              {errors.password && <span>Senha é obrigatória</span>}
              <EyeIcon
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} style={{ color: "black" }} />
                ) : (
                  <AiOutlineEye size={22} style={{ color: "black" }} />
                )}
              </EyeIcon>
            </InputContainer>
          </GroupInput>
          <Button type="submit">Entrar</Button>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}
