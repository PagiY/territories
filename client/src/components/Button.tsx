import styled from '@emotion/styled';

const CustomButton = styled.button`
  background-color: pink;
  border: none;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: hotpink;
    color: white;
  }
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