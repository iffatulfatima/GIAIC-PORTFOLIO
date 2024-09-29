import Header from "@/app/components/header"
import Footer from "@/app/components/footer" 
import Image from "next/image"

export default function Home() {
  return (
    <main>
       <Header/>
       <div className="projects">
        <h1>Projects</h1>
        <br />
        <div className="projects-container">
       
            <div className="project">
            <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/p1.png" 
          alt="Iffat image"
          width={800}
          height={400} 
          
         >
         </Image>
         </div>
         </div>
            <div className="project">
            <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/p5.png" 
          alt="Iffat image"
          width={800}
          height={400} 
          
         >
         </Image>
       
         </div>
                </div>
                <div className="project">
            <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/p2.png" 
          alt="Iffat image"
          width={800}
          height={400} 
          
         >
         </Image>
       
         </div>
                </div>
                <div className="project">
            <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/p3.png" 
          alt="Iffat image"
          width={800}
          height={400} 
            >
         </Image>
        </div>
                </div>
                <div className="project">
            <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/p7.png" 
          alt="Iffat image"
          width={800}
          height={400} 
         >
         </Image>
         </div>
                </div>
                <div className="project">
            <div className="image-frame">
        <Image
          className="mt-0"
          src="/pics/p4.png" 
          alt="Iffat image"
          width={800}
          height={400} 
         >
         </Image>
         </div>
                </div>
        
  </div>
  <br />
  <p>For More Projects</p>
  <p>Visit My Profile</p>

        </div>
      
      <Footer/>
         </main>
  );
};
        