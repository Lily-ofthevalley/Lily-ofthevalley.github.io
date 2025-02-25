import Card from "../components/Technologies/Card";
import Seperator from "../components/Technologies/Seperator";
import python from "../assets/python-svgrepo-com.svg";
import typescript from "../assets/typescript-official-svgrepo-com.svg";
import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import javascript from "../assets/javascript-svgrepo-com.svg";
import sql from "../assets/sql-database-generic-svgrepo-com.svg";
import java from "../assets/java-svgrepo-com.svg";
import php from "../assets/php-svgrepo-com.svg";
import django from "../assets/django-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import jquery from "../assets/jquery-svgrepo-com.svg";
import bootstrap from "../assets/bootstrap-fill-svgrepo-com (1).svg";
import azure from "../assets/azure-svgrepo-com.svg";
import github from "../assets/github-142-svgrepo-com (2).svg";
import mysql from "../assets/mysql-logo-svgrepo-com.svg";
import sqlite from "../assets/sqlite-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";

const Technologies = () => {
  return (
    <div className="w-4/5 bg-[#DDB6C6] mt-6 rounded-xl flex flex-col items-center">
      <Seperator title="Languages" />
      <div className="grid grid-cols-3 w-4/5">
        <Card image={python} text="Python" />
        <Card image={typescript} text="Typescript" />
        <Card image={html} text="Html" />
        <Card image={css} text="Css" />
        <Card image={javascript} text="Javascript" />
        <Card image={sql} text="Sql" />
        <Card image={java} text="Java" />
        <Card image={php} text="Php" />
      </div>
      <Seperator title="Frameworks/Libraries" />
      <div className="grid grid-cols-3 w-4/5">
        <Card image={django} text="Django" />
        <Card image={react} text="React" />
        <Card image={tailwind} text="Tailwindcss" />
        <Card image={jquery} text="Jquery" />
        <Card image={bootstrap} text="Bootstrap" />
      </div>
      <Seperator title="Other" />
      <div className="grid grid-cols-3 w-4/5">
        <Card image={azure} text="Microsoft Azure" />
        <Card image={github} text="Github" />
        <Card image={mysql} text="MySQL" />
        <Card image={sqlite} text="SQLite" />
        <Card image={figma} text="Figma" />
      </div>
    </div>
  );
};

export default Technologies;
