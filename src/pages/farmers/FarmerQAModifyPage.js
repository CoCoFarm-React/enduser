import { useParams } from "react-router";
import FarmerQAModifyComponent from "../../components/farmers/FarmerQAModifyComponent";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerQAModifyPage = () => {

  const {queryObj, moveList, moveModify, moveRead} = useQueryObj()
  const { bno } = useParams()


  return ( 

    <div className="container mx-[auto] w-[1280px] ">

      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerQAModifyComponent bno={bno} 
        addUrl={{url: "/farmer/qa/"}} 
        moveRead={moveRead}></FarmerQAModifyComponent>
      </div>

    </div>
   );
}
 
export default FarmerQAModifyPage;