import Image from "next/image";
import mercyImage from "@/public/mercy.png";
import axios from 'axios';
import Link from "next/link";

export default function Home() {
  const handleDownload = async () => {
    try {
        const response = await axios.get('/api/');
        // Handle success, typically the browser will start downloading the file automatically
    } catch (error) {
        // Handle error
        console.error('Failed to download file', error);
    }
  };

  return (
    <main className="flex flex-col min-h-screen gap-10 px-24">
      <div className="min-h-[80vh] max-w-4xl mx-auto flex flex-col gap-5 justify-center items-center">
        <button className="flex items-center justify-center gap-2 bg-[#6148E0] text-white p-3 w-[15vw] rounded-full font-bold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16B208] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#16B208]"></span>
          </span>
          Availabe for work
        </button>
        <div className="text-7xl font-bold">Hi, I&apos;m Mercy Kalu</div>
        <p className="">A creative Product Designer and Brand Identity Creator</p>
        <button className="flex items-center justify-center gap-2 text-[#6148E0] bg-white p-3 w-[15vw] rounded-full font-bold">
          Hire me lets connect
        </button>
      </div>

      <div className="min-h-screen max-w-7xl mx-auto flex items-center gap-10 justify-center transition ease-in-out delay-150" id="about">
        <div className="flex flex-col gap-10">
          <h3 className="text-4xl font-bold">About me</h3>
          <p className="text-xl text-justify">I am a logical and result-driven Product Designer highly passionate about designing products that are simple, 
            yet elegant and crafting experiences that enhance the utility of a product for its users with a focus on accessibility, 🏄‍♂️
            <br /><br />
            I am a logical and result-driven Product Designer highly passionate about designing products that are simple, yet elegant 
            and crafting experiences that enhance the utility of a product for its users with a focus on accessibility, 🏄‍♂️
          </p>
          <a href="/MercyKalu-CV.pdf" download="MercyKalu-CV.pdf"
          className="flex items-center justify-center gap-2 text-[#6148E0] bg-white p-3 w-[15vw] rounded-full font-bold">
            Download my resume
          </a>
        </div>

        <div className="w-full">
        <Image src={mercyImage} alt="Picture of the author" width={500} className="m-5" />  
        </div>      
      </div>
    </main>
  );
}
