import Leftbar from "../components/Leftbar";
import Main from "../components/Main";
import Rightbar from "../components/Rightbar";

export default function Home() {
  return (
    <>
      <div className="bg-green-200 pt-[5.5rem] p-8 flex space-x-8 h-screen">
        <div className="bg-green-100 w-1/4 rounded-lg"> <Leftbar/> </div>
        <div className="bg-green-100 w-4/5 rounded-lg"> <Main/> </div>
        <div className="bg-green-100 w-1/4 rounded-lg"> <Rightbar/> </div>
      </div>
    </>
  );
}
