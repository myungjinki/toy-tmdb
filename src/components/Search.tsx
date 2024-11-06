import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  position: absolute;
  top: 100px;
`;

const Input = styled.input`
  width: 100%;
  height: 1.5rem;
  border-radius: 1rem;
  padding-left: 1rem;
  &:focus {
    border: none;
  }
`;

function Search({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchText("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} value={searchText} />
    </Form>
  );
}

export default Search;
