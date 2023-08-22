import styled from "@emotion/styled";

const CustomText = styled.p`
  font-size: 11px;
  margin-top: 1px;
  margin-bottom: 1px;
  color: red;
`;

const ErrorText = ({ errorMessage }: {errorMessage: string}) => (
  <CustomText>{errorMessage}</CustomText>
);

export default ErrorText;