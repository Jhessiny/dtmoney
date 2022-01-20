import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--color-primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: var(--color-primary-light);
    font-size: 1rem;
    color: #fff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: all .2s;

    &:hover{
        filter: brightness(.9)
    }
    
  }
`;
