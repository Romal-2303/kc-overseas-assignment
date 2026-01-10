import classes from "./App.module.scss";
import Homepage from "./pages/Homepage/Homepage";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <div className={classes["app"]}>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
