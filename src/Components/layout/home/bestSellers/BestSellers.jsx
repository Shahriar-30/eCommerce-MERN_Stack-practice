import React from 'react';
import Slider from "react-slick";
import Title from '../../../reUseAble/Title';
import Card from "../../../reUseAble/card/Card";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Container from '../../../reUseAble/Container';
import "slick-carousel/slick/slick.css";

function BestSellers() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: (
          <div>
            <div className="bg-prime text-white p-3 w-fit rounded-full cursor-pointer translate-y-[-50%] absolute top-[50%] left-0 z-50">
              <GrFormPrevious className="text-[30px]  font-bold    " />
            </div>
          </div>
        ),
        nextArrow: (
          <div>
            <div className="bg-prime text-white p-3 w-fit  cursor-pointer rounded-full translate-y-[-50%] absolute  top-[50%] right-0 z-50">
              <MdNavigateNext className="text-[30px]  font-bold " />
            </div>
          </div>
        ),
        appendDots: (dots) => (
          <div
            style={{
              display: "none",
            }}
          ></div>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
        <section className="mb-[20px]">
            <Container className={"relative overflow-hidden"}>
            <Title txt={"Our Bestsellers"} />
            <Slider {...settings} className="ml-0 md:ml-6">
          <div>
            <Card
              tag="new"
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              tag="new"
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              tag="old"
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
          <div>
            <Card
              cardImg="img/products.png"
              cardName="Basic Crew Neck Tee"
              cardPrize="44.00"
              cardBrand="Black"
            />
          </div>
        </Slider>
            </Container>
        </section>
    </>
  )
}

export default BestSellers