import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  h1 {
    font-size: 2.8rem;
    color: black;
    opacity: 0.98;
    font-weight: 400;
  }
  h5 {
    font-size: 1.6rem;
    color: black;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 17px;
    color: black;
    opacity: 0.85;
  }
  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const Right = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
`;
