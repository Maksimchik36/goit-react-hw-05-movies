import styled from "@emotion/styled";

export const ButtonSt = styled.button`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 5px;
//   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
   opacity: 1;
}
`;