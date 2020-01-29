import React from "react";
import { FaGithubAlt, FaPlus } from "react-icons/fa";
import { Container, Form, ButtonSubmit } from "./styles";
function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form submit={() => {}}>
        <input type="text" placeholder="Adicionar Repositório" />
        <ButtonSubmit disabled>
          <FaPlus color="#fff" size={14} />
        </ButtonSubmit>
      </Form>
    </Container>
  );
}

export default Main;
