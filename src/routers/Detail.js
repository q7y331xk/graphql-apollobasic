import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOIVE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      name
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOIVE, {
    variables: { id: Number(id) },
  });
  console.log(loading, data, error);
  return (
    <Fragment>
      Detail
      <br />
      {!loading && data && data.movie.name}
    </Fragment>
  );
};

export default Detail;
