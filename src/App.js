import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCont from "./components/MainCont";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
      element: <MainCont/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      },
      {
        path: "/demo",
        element: (
          <>
          <Demo/>
          <Demo2/>
          </>
        )
      }
      
    ]
}])
function App() {
  return (
    <div className="App">
      {/* <h1 className="text-green-500 font-bold">Hi there!</h1> */}
      <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
