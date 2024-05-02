import NavBar from "../Components/NavBar";
import img1 from "../assets/images/car3.jpg"
import Hero from "../Components/Hero";
import ProductCard from "../Components/ProductCARDWORK";

function Home(){
    return (
        <>
        <NavBar/>
        <Hero heading = "Welcome to my Homepage" image={img1}/>
        <ProductCard/>
        {/* <h1 className="bg-warning text-light">Welcome to my Homepage</h1> */}
        <div className="" style={{backgroundColor:"purple", borderRadius:"15px "}}>
            <img src={img1} alt="" width={300} />
        </div>
        </>
    ) 
}

export default Home