import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact(){
  return(
    <div>
        <Header/>
        <h1 className="text-center mt-20 text-6xl font-bold">Contact Us</h1>
        <div className="text-center  text-4xl ">
        <p className="mt-10">Feel free to reach out to us at our email address: info@example.com</p>
        <p className="mt-10">Or you can also contact us through our social media channels:</p>
        </div>
        <Footer/>
  
    </div>
  )
}