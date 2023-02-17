import React from "react";

import { Text, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import { Route, Routes, Navigate } from "react-router-native";
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}></Route>
        <Route path="/singin" element={<Text>Working on it</Text>} />
         
        {
        /*  Navigate para redireccionar en una pagina 
        <Navigate to='/'/> */
        }

      </Routes>
    </View>
  );
};

export default Main;
