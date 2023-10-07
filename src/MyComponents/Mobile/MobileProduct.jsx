import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import img from "../../Images/d1.png";
import img2 from "../../Images/d16.png";
import img3 from "../../Images/d22.png";
import img4 from "../../Images/d23.png";
import img5 from "../../Images/d19.png";
import img6 from "../../Images/d20.png";
import img7 from "../../Images/d21.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CartAction, MobileAction, MobileDataAction } from "../../Redux/Action";
import '../Cart/cart.css'


const MobileProduct = ()=>{
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const MobileApi=useSelector((storeData)=>{
        return storeData.Mobile
    })
    // const Mobilewala=useSelector((storeData)=>{
    //     return storeData.Mobile
    // })
    
    useEffect(()=>{
    axios.get('https://lokender-backend-api.vercel.app/api/v1/product/651e5d25b53b201b2a359766').then((res)=>{
         dispatch(MobileAction(res.data.products))
        //  dispatch(MobileDataAction())
    })
    },[])
    const addtocart=(e)=>{
        dispatch(CartAction(e))
        alert('Data Added in Cart')
    }
    return (
        <>
         
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3 >Top Offers</h3>
                <div className="fashioncont1" >
                       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        {/* card */}
                       {
                        MobileApi.map((e,id)=>{
                            return(
                                <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
                            // onClick={()=>navigate("/mobile-view")}
                        >
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={e.images[1]}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                           {e.brand}
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">{e.price}</h3> 
                             <button onClick={()=>addtocart(e)} className="btn-wala" >Add to Cart</button>
                        </div>
                            )
                        })
                       }
                        {/* card-end */}
                       </div>
                </div>
            </div>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3>Popular</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3>Latest</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileProduct;




// {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
//                         <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
//                             onClick={()=>navigate("/mobile-view")}
//                         >
//                             <img
//                             onClick={() => {
//                                 //navigate("/product-view", { state: "e" });
//                             }}
//                             src={img4}
//                             alt="e.title"
//                             className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
//                             />
//                             <h2 className="text-lg font-medium mb-2">
//                             Product Name
//                             {/*e.title.length >= 20 ? "..." : ""*/}
//                             </h2>
                        
//                             <h3 className="text-base">₹ 999</h3>  
//                         </div>
//                         <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
//                             onClick={()=>navigate("/mobile-view")}
//                         >
//                             <img
//                             onClick={() => {
//                                 //navigate("/product-view", { state: "e" });
//                             }}
//                             src={img3}
//                             alt="e.title"
//                             className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
//                             />
//                             <h2 className="text-lg font-medium mb-2">
//                             Product Name
//                             {/*e.title.length >= 20 ? "..." : ""*/}
//                             </h2>
                        
//                             <h3 className="text-base">₹ 999</h3>  
//                         </div>
//                         <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
//                             onClick={()=>navigate("/mobile-view")}
//                         >
//                             <img
//                             onClick={() => {
//                                 //navigate("/product-view", { state: "e" });
//                             }}
//                             src={img4}
//                             alt="e.title"
//                             className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
//                             />
//                             <h2 className="text-lg font-medium mb-2">
//                             Product Name
//                             {/*e.title.length >= 20 ? "..." : ""*/}
//                             </h2>
                        
//                             <h3 className="text-base">₹ 999</h3>  
//                         </div>
//                         <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
//                             onClick={()=>navigate("/mobile-view")}
//                         >
//                             <img
//                             onClick={() => {
//                                 //navigate("/product-view", { state: "e" });
//                             }}
//                             src={img3}
//                             alt="e.title"
//                             className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
//                             />
//                             <h2 className="text-lg font-medium mb-2">
//                             Product Name
//                             {/*e.title.length >= 20 ? "..." : ""*/}
//                             </h2>
                        
//                             <h3 className="text-base">₹ 999</h3>  
//                         </div>
//                         <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
//                             onClick={()=>navigate("/mobile-view")}
//                         >
//                             <img
//                             onClick={() => {
//                                 //navigate("/product-view", { state: "e" });
//                             }}
//                             src={img4}
//                             alt="e.title"
//                             className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
//                             />
//                             <h2 className="text-lg font-medium mb-2">
//                             Product Name
//                             {/*e.title.length >= 20 ? "..." : ""*/}
//                             </h2>
                        
//                             <h3 className="text-base">₹ 999</h3>  
//                         </div>
//                         <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
//                             <img
//                             onClick={() => {
//                                 //navigate("/product-view", { state: "e" });
//                             }}
//                             src={img3}
//                             alt="e.title"
//                             className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
//                             />
//                             <h2 className="text-lg font-medium mb-2">
//                             Product Name
//                             {/*e.title.length >= 20 ? "..." : ""*/}
//                             </h2>
                        
//                             <h3 className="text-base">₹ 999</h3>  
//                         </div>
//                     </div> */}