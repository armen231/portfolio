import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './app.scss';
import { dataProject } from '@/data';
import Header from "@/components/header/Header";
import ListProjects from "@/components/ListProjects/ListProjects";
import ProjectDescription from "@/components/ProjectDescription/ProjectDescription";

type typeTheme = "light" | "dark";
type typeIsTouch = 0 | 1;

export default function App() {
  const isTouch = getIsTouch();
  const [theme, setTheme] = useState<typeTheme>(getTheme);
  const [dataProjectDescription, setDataProjectDescription] = useState<null | object>(null);

  const elemHtml = document.querySelector('#root') || document.body; // для определения расположения помонента отображающий подробности о сайте


  useEffect(() => {
    const root = document.documentElement;

    if (theme == "light") {
      localStorage.setItem("theme", "light");
      root.style.setProperty('--themeBackground1', "#ffffff");
      root.style.setProperty('--themeBackground2', "#ffffff9e");
      root.style.setProperty('--themeColor', "#000000");
      root.style.setProperty('--themeColor2', "#383838");
    } else if (theme == "dark") {
      localStorage.setItem("theme", "dark");
      root.style.setProperty('--themeBackground1', "#000000");
      root.style.setProperty('--themeBackground2', "#13131399");
      root.style.setProperty('--themeColor', "#ffffff");
      root.style.setProperty('--themeColor2', "#b8b8b8");
    }
  },
    [theme]);


  function hundleSetTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") { setTheme("light"); }
  }



  return (
    <>
      <Header theme={theme} hundleSetTheme={hundleSetTheme}></Header>

      <ListProjects dataProject={dataProject} isTouch={isTouch} setDataProjectDescription={setDataProjectDescription}></ListProjects>

      {dataProjectDescription != null &&
        createPortal(
          <ProjectDescription isTouch={isTouch} dataProjectDescription={dataProjectDescription} setDataProjectDescription={()=>{setDataProjectDescription(null)}} />,
          elemHtml
        )
      }
    </>
  )
}

function getTheme(): typeTheme {
  if (localStorage.getItem("theme") === "dark") {
    return "dark";
  } else if (localStorage.getItem("theme") === "light") {
    return "light";
  } else {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches == true) { return "dark"; }
      else if (window.matchMedia("(prefers-color-scheme: light)").matches == true) { return "light"; }
    }
  }

  return "light";
}

function getIsTouch(): typeIsTouch {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) ||
    navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/RIM/i)
  ) { return 1; } else { return 0; }
}