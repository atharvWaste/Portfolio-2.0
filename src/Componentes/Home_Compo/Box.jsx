import Nav from "./Nav";
import Center_left from "./Center_left";
import Right from "./Right";

const Box = () => {
  return (
    <section className="w-100% h-screen overflow-hidden bg-black text-white">
      <Nav/>
      <Center_left/>
      <Right />
    </section>
  );
};

export default Box;
