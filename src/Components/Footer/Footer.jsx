import React from "react";
import Menu from "./Menu";
import { list } from "../navBar/txt";
import { catagoryTxt } from "../header/catagory/CataTXT";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import Container from "../reUseAble/Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container className="bg-Bg flex flex-col gap-5 w-full p-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between gap-6 flex-wrap">
            <div>
              <Menu titleTxt={"MENU"} data={list} />
            </div>
            <div>
              <Menu titleTxt={"SHOP"} data={catagoryTxt} />
            </div>
            <div>
              <Menu titleTxt={"HELP"} data={catagoryTxt} />
            </div>
          </div>
          <div>
            <Link to={"/"}>
              <img src="img/logo.svg" alt="logo" className="w-[180px]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="flex gap-4 mb-4">
            <FaFacebookF />
            <TfiLinkedin />
            <FaInstagram />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;
