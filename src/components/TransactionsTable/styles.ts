import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--color-text);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background-color: #fff;
    color: var(--color-text);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--color-title);
    }

    &.deposit {
      color: var(--color-green);
    }

    &.withdrawal {
      color: var(--color-red);
    }
  }
`;
