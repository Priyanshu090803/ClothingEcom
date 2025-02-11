
const ClothCards = (props) => {
    const {ResData}=props;
    const{title,price,image}=ResData ;
  return (
    <div className=" border-1  h-96 w-60 m-5 rounded-2xl flex justify-center flex-wrap">
    <img src={image} className=" h-48 w-40 border rounded-2xl mt-4 object-cover"/>
        <h1 className=" text-xl font-bold m-4">{title}</h1>
        <p>{price}</p>
    </div>
  )
}

export default ClothCards