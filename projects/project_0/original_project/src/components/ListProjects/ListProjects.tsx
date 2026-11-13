import "./ListProjects.scss";
import imgProject0 from "@/assets/img/project0/img1.png";
import imgProject1 from "@/assets/img/project1/img1.png";
import imgProject2 from "@/assets/img/project2/img1.png";
import imgProject3 from "@/assets/img/project3/img1.png";
import imgProject4 from "@/assets/img/project4/img1.png";

interface typeImgProject {
  [name: string]: string,
}

const imgProject: typeImgProject = {
  Project0: imgProject0,
  Project1: imgProject1,
  Project2: imgProject2,
  Project3: imgProject3,
  Project4: imgProject4,
}

interface typeDataProject {
  id: number,
  name: string,
  url: string,
  img: string,
  description: [title: string, text: string[] | string],
  urlToGit: string,
}



export default function ListProjects({...props}) {

  return(
    <>
      <div className="main_container">
        <div className="section1">
          <div className="container">
            {
              props.dataProject.map((project: typeDataProject)=>{
                return <Project 
                  id={project.id}
                  key={project.id} 
                  name={project.name}
                  url={project.url}
                  img={imgProject[project.name]}
                  isTouch={props.isTouch}
                  setDataProjectDescription={() => { props.setDataProjectDescription({
                    id: project.id,
                    name: project.name,
                    url: project.url,
                    img: project.img,
                    description: project.description,
                    urlToGit: project.urlToGit,
                  })} }
                  >
                  </Project>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}


function Project({...props}) {

  return(
    <>
      <div className={`project project_touch${props.isTouch}`}> 
        <p className="project-name">{props.name}</p>
        <img src={props.img} alt=""/>
        <div className="line"></div>
        <button className={`open_site open_site_touch${props.isTouch}`} onClick={() => { props.setDataProjectDescription()}}>Подробнее</button>
      </div>
    </>
  );
}