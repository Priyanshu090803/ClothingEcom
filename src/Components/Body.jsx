import CLOTH_DATA from "../Utils/mockdata"
import ClothCards from "./ClothCards"

const Body = () => {
  return (
    <div className=" h-screen w-full flex justify-between flex-wrap">
     {/* <ClothCards ResData={CLOTH_DATA[0]}/> */}
    {
       
      CLOTH_DATA?.map((value)=>(
        <ClothCards ResData={value}/>
      ))
        

     

    }
    </div>
  )
}

export default Body