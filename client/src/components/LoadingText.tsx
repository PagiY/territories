import styled from "@emotion/styled";

const CustomText = styled.p`
  font-size: 11px;
  margin-top: 1px;
  margin-bottom: 1px;
  color: blue;
`;

/** 
 * Used for loading text
*/
const LoadingText = ({ loadingMessage }: {loadingMessage: string}) => (
  <CustomText>{loadingMessage}</CustomText>
);

export default LoadingText;