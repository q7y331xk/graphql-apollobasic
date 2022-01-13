import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { movieArray } from "../components/Movie";
import styled from "styled-components";

const GET_MOVIES = gql`
  {
    movies {
      id
      name
    }
  }
`;

const Loading = styled.div`
  font-size: 18px;
  color: red;
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  if (data) {
  }
  return (
    <Fragment>
      <Loading>{loading ? "Loading..." : "Complete"}</Loading>
      <div>{!loading && data && data.movies.map(movieArray)}</div>
    </Fragment>
  );
};

export default Home;
