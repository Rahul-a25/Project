import React from "react";
import img from "../../Images/d16.png";
import img2 from "../../Images/d17.png";
import img3 from "../../Images/d18.png";
import img4 from "../../Images/d19.png";
import img5 from "../../Images/d57.png";
import { useNavigate } from "react-router-dom";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const FashionViewCont = () => {
  const navigate = useNavigate();
  const SlideLeft = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft-500
  }
  const SlideRight = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft+500
  }
  return (
    <>
      <div className="fashviewcont">
        <div className="fashviewcontl">
          <h3>Filters</h3>
          <div className="filtercont ft">
            <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>CATEGORIES</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content dpcont">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>PRICE</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>BRAND</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>RATINGS</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>RAM</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>INTERNAL STORAGE</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>NETWORK TYPE</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>SCREEN SIZE</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>SIM TYPE</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>AVAILABLE OFFERS</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>TYPE</span>
                      <i class="fa-solid fa-caret-down dpci"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
              <div className="filteritem">
                <div class="dropdown">
                    <div className="dpc">
                      <span>AVAILABILITY</span>
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="fashviewcontr">
        <div className="relative flex items-center">
            <MdChevronLeft onClick={SlideLeft} size={40} />
            <div
              id="slider"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
              <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                <h3>Brand</h3>
              </div>
            </div>
            <MdChevronRight onClick={SlideRight} size={40} />
          </div>
          <div className="fashrightprod">
            <div className="fashrightproditm">
              <button>AD</button>
              <div className="rff">
                <div
                  className="proditm"
                  onClick={() => navigate("/fashion-view")}
                >
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <button>AD</button>
              <div className="rff">
                <div
                  className="proditm"
                  onClick={() => navigate("/fashion-view")}
                >
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <button>AD</button>
              <div className="rff">
                <div
                  className="proditm"
                  onClick={() => navigate("/fashion-view")}
                >
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <button>AD</button>
              <div className="rff">
                <div
                  className="proditm"
                  onClick={() => navigate("/fashion-view")}
                >
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <button>AD</button>
              <div className="rff">
                <div
                  className="proditm"
                  onClick={() => navigate("/fashion-view")}
                >
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <button>AD</button>
              <div className="rff">
                <div
                  className="proditm"
                  onClick={() => navigate("/fashion-view")}
                >
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>

                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionViewCont;
