import React from "react"
import "../Style/Layouts/header/header.css"
import fundo from "../img/culture.jpg"


export default function Layout (){
    return (
        <>
        {/* inicio do header */}
            <header className = "header">

                {/* primerio link ancora(o que é) */}
                <div className = "container_first_menu_link"> 
                    <a name = "o que é" className = "link_menu link_proposal" href = "#concurso_">O que é</a>
                    <hr className = 'line_link'></hr>
                </div>

                {/* A logo e o nome da Empresa */}
                <div className = "visual_mark">

                        {/* logo */}
                        <div className= "container_logo">
                            <div className= "content_logo">
                                <div className = "circle_green"> </div>
                                <div className = "circle_red"></div>
                                <div className = "circle_orange"></div>
                                <div className = "circle_white"></div>
                            </div>
                        </div>

                        {/* nome da empresa */}
                        <div className = "container_name_company">
                            Travels Culture
                        </div>

                </div>

                {/* segundo link ancora (participe) */}
                <div className = "container_first_menu_link"> 

                    <a name = "participe" className = "link_menu" href = "#regist" title = "Link ancora para partipe">Participe</a>

                    <hr className = 'line_link_two'></hr>

                    
                </div>

            </header>

            {/* Imagem de plano de fundo do cabeçalho da pagina  */}

            <div className = "container_background_img">

                {/* overlayer da imagem de fundo */}
                <div className = "overlayer"> </div>

                {/* imagem de fundo */}
                <img src={fundo} titile = " " alt ="" cite = "Designed by jannoon028 / Freepik" className = "background_header"/>
            
                {/* containder contendo o nome da empresa e o Slogan */}
                <div className = "container_slogan"> 

                    <h1 className = "title_Slogan">Travels Culture</h1> 
                    <h2 className = "slogan"> Levando Cultura á todo lugar</h2>
                
                </div>

            </div>

        </>
    )
}