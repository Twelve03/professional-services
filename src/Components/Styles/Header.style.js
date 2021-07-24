import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: solid white 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  position: fixed;
  top: 0;
  color: white;

  div {
    display: flex;
    width: 3.6rem;
    align-items: center;
    justify-content: space-between;

    p{
      font-size: 0.9rem;
    }
  }
`;
