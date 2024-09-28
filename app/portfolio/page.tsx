import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Portfolio(){
    return(
        <div>
            <Header/>
            <h1 className="text-center mt-20 text-6xl font-bold">Portfolio</h1>
        <div className="text-center mt-24 text-4xl">
        <p>Here are some of my projects:</p>
        </div>
        <Footer/>
        </div>

    )
}