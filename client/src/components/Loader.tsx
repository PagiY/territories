import styled from '@emotion/styled';

const CustomLoader = styled.span`
  width: 20px;
  height: 20px;
  border: 5px solid #FFF;
  border-bottom-color: rgb(84, 105, 212);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  color: red;

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const Loader = () => <CustomLoader />;

export default Loader;