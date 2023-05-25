import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Header from "../Header/Header";
import PopolarMenu from "../PopolarMenu/PopolarMenu";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Category></Category>
      <PopolarMenu></PopolarMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
