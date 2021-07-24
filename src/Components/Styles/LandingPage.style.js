import styled from "styled-components";

export const LandingPage = styled.div`
  background-image: url("https://i.ibb.co/q1M30Fw/pexels-fauxels-3183183.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";

  div {
    height: 50%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      margin-bottom: 0.5rem;
      color: #a1a1a1;
      font-size: medium;
    }

    p {
      font-size: xx-large;
    }

    button {
      width: 10rem;
      border: none;
      border-radius: 30px;
      padding: 0.78rem;
      margin-top: 2rem;
      color: white;
      background-color: #1177ee;
      font-weight: 600;
    }
  }
`;
