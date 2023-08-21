import styled from '@emotion/styled';

const CustomInput = styled.input`
  color: red
`;

type InputProps = {
  id?: string,
  type: string,
  placeholder?: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props: InputProps) => (
  <CustomInput
    {...props}
  />
);

export default Input;