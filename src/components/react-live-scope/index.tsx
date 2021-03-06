import React from "react";
import * as Formik from "formik";
import * as ReactTable from "react-table";
import FocusLock from "react-focus-lock";
import {
  MdSettings,
  MdReceipt,
  MdGroupWork,
  MdCheckCircle,
  MdGraphicEq,
  MdBuild,
  MdCall,
  MdPhone,
  MdArrowDropDown
} from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Lorem from "react-lorem-component";
import * as Loaders from "react-spinners";
import CircleIcon from "../icon";

/**
 * @description This object is responsible to preload components
 * to be used on the codeblock.
 *
 * @returns Component / ReactNode
 */

const reactIcons = {
  MdSettings,
  MdReceipt,
  MdGroupWork,
  MdCheckCircle,
  MdGraphicEq,
  MdBuild,
  MdCall,
  MdPhone,
  MdArrowDropDown,
  AiOutlineUser,
  FaFacebook,
  FaTwitter
};

const StarIcon = (props: any) => (
  <svg fill="current" viewBox="0 0 24 24" {...props}>
    <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" />
  </svg>
);

const ReactLiveScope = {
  React,
  ...React,
  ...Formik,
  ...ReactTable,
  ...Loaders,
  ...reactIcons,
  StarIcon,
  FocusLock,
  Lorem,
  CircleIcon
};

export default ReactLiveScope;
