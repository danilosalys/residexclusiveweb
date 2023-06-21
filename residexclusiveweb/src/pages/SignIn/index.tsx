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
  DivIcon,
} from "./styles";
import { useForm } from "react-hook-form";
import Logo from "../../assets/images/logo.jpg";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    navigate("/dashboard");
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
                  // required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.user && <span>E-mail inválido</span>}
            </InputContainer>
            <InputContainer>
              Senha:
              <DivIcon>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    //  required: true
                  })}
                />
                <EyeIcon
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      size={22}
                      style={{ color: "black" }}
                    />
                  ) : (
                    <AiOutlineEye size={22} style={{ color: "black" }} />
                  )}
                </EyeIcon>
              </DivIcon>
              {errors.password && <span>Senha é obrigatória</span>}
            </InputContainer>
          </GroupInput>
          <Button type="submit">Entrar</Button>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}
