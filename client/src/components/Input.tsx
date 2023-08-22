import styled from '@emotion/styled';

const CustomInput = styled.input`
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  width: 100%;
  box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
  :focus{
      border-color: #0366d6;
      outline: none;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }

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