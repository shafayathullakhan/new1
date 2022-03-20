import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {
  const [citySearched, setCitySearched] = useState("");
  
  const mutation = (new graphQLObjectType[
    (getbankname, { data, error })
  ]() = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: bankSearched }
  }));

  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data);
  }

  return;
}

export default Home;
