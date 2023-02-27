import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    label{
        font-size: min(20px, 8vw);
        color: #fefefe;
        text-decoration: ${done ? "line-through" : "initial"};
    }
    input{
        width: 20px;
        height: 20px;
        margin-right: 15px;
        cursor: pointer;
    }
`
);