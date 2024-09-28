import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About(){
    return(
        <div className="h-[80vh] ">
            <Header/>
           <h1 className="text-center mt-20 text-6xl font-bold">About</h1>
           <p className="text-center mt-24 text-4xl ">I am a frontend developer passionate about creating innovative solutions and learning new technologies.</p>
           <Footer/>
        </div>
    )
}