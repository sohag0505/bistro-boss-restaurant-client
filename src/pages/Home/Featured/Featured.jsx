import featureImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Freatured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2023</p>
          <p className="uppercase">When i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            eligendi, inventore maiores voluptates eius, officia ab, enim
            voluptatibus quis sed similique. Expedita enim rem temporibus cumque
            perspiciatis, repellendus vero assumenda consequuntur minus quod
            quia esse possimus unde quas doloribus magnam error non, aliquid
            soluta iusto necessitatibus delectus! Amet, totam, eveniet
            dignissimos optio ex aut, possimus iure itaque ratione assumenda
            cupiditate!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
