import { Outlet, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Layout from "./layouts/Layout"
import Note from "./pages/note/Note"
import Notes from "./pages/notes/Notes"

const App = () => {

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Notes />} />
          <Route path=":noteID" element={<Note />} />
        </Route>
      </Routes>
    </Layout>
  )
}
export default App;