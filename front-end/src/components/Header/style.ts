import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
  height: 54px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 975px;
    margin: 0 auto;
    height: 54px;
    padding: 0 20px;
    a {
      margin-top: 7px;
      -webkit-transition: opacity 0.1s ease-out;
      transition: opacity 0.1s ease-out;
    }
    div {
      svg {
        margin: 5px;

        &.active {
          opacity: 1;
          cursor: pointer;
        }
        &.deactive {
          opacity: 0;
        }
      }
      input {
        background: transparent;
        display: flex;
        border: transparent;
        flex: 1;
        height: 28px;
      }
    }
  }
`;
export const CenterNav = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #a5a7aa;
`;

export const RightNav = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
`;
