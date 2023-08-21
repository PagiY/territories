import styled from '@emotion/styled';

const CustomButton = styled.button`
  background-color: pink
`;

type ButtonProps = {
  text: string,
  type: "button" | "submit" | "reset" | undefined,
}
const Button = ({
  text,
  type,
}: ButtonProps) => (
  <CustomButton type={type}>
    {text}
  </CustomButton>
)

export default Button;