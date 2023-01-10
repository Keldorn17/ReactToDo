import "./App.css";
import { QueryClient, QueryClientProvider } from 'react-query'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./components/Counter";
import Home from "./components/Home";
import Login from "./components/Login";
import { Todo } from "./components/Todo";
import { MyNavBar } from "./components/MyNavBar";
import { useState } from "react";
import { Products } from "./components/Products";
import { Product } from "./components/Product";

const queryClient = new QueryClient()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container p-5">
        <MyNavBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
        <div className="holder">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route
              path="login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            { isLoggedIn &&
              <Route
              path="todo" 
              element={<Todo setIsLoggedIn={setIsLoggedIn} />} 
            />
            }
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
          </Routes>
        </div>
        {/*
        {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
        {isLoggedIn && <Todo setIsLoggedIn={setIsLoggedIn} />}
        */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
