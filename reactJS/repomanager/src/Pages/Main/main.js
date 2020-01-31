import React, { Component } from "react";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";

import Container from "../../components/Container";
import { Form, ButtonSubmit, List } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

class Main extends Component {
  state = {
    newRepo: "",
    repositories: [],
    loading: false
  };
  // Carrega os dados do localStorage
  componentDidMount() {
    const repos = localStorage.getItem("repositories");

    if (repos) {
      this.setState({ repositories: JSON.parse(repos) });
    }
  }
  // Salvar os dados do LocalStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
  }
  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);
    const data = {
      name: response.data.full_name
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: "",
      loading: false
    });
  };
  render() {
    const { newRepo, repositories, loading } = this.state;
    console.log(loading);
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <ButtonSubmit loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </ButtonSubmit>
        </Form>

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <span>{repo.name}</span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
