import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tobuys from "pages/ToBuys/Tobuys";
import { TobuyList, TobuyAdmin, TobuyDetail, TobuyWrite } from "./pages/ToBuys";
import Todos from "pages/ToBuys/Tobuys";
import { TodoList, TodoAdmin, TodoDetail, TodoWrite } from "./pages/ToDos";
import Login from "pages/Login";
import Signup from "pages/SignUp";
import Check from "pages/Check";
import Main from "pages/Main";
import { NavBar, Logo } from "components";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} /> {/*로그인*/}
        <Route path="/signup" element={<Signup />} /> {/*회원가입*/}
        <Route path="/check" element={<Check />} /> {/*식단체크*/}
        <Route path="/" element={<Main />} /> {/*메인*/}
        <Route path="todo" element={<Todos />}>
          <Route path="list" element={<TodoList />} />
          <Route path="admin" element={<TodoAdmin />} />
          <Route path="detail" element={<TodoDetail />} />
          <Route path="write" element={<TodoWrite />} />
        </Route>
        <Route path="tobuy" element={<Tobuys />}>
          <Route path="list" element={<TobuyList />} />
          <Route path="admin" element={<TobuyAdmin />} />
          <Route path="detail" element={<TobuyDetail />} />
          <Route path="write" element={<TobuyWrite />} />
        </Route>
      </Routes>
    </>
  );
}
