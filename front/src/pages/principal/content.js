import React, { useState } from 'react';
import Axios from 'axios'
import "../../Style/Principal/Content/content.css"
import Festival from "../../img/festival.jpg"

export default function Content(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const FrontUrl = Axios.create("http://localhost:3000") //variavel de ambiente
    const url = "http://localhost:80/devTinpix/backend/index.php" //variavel de ambiente
    const overlay = document.querySelector('.overlay_lightbox')
    const lightbox = document.querySelector('.lightbox')
    
    // evento ao enviar formulario
    const HandleSubmit = async (e)=> {

        e.preventDefault()
        const Data = new FormData
        let names = ['nome', 'email', 'telefone']
        let obj =   [nome, email, telefone]

        const introductionData = async () =>{

            for(let i in names){
            
               Data.append(names[i], obj[i]);
                
            }

        }
       
        introductionData()

        // let obj2 = {'nome': nome, 'email': email, 'telefone': telefone}
        // let obj2 = new FormData
        // obj2.append("nome", nome) 
        
        // await FrontUrl.post(url, obj)
        // await  FrontUrl.post(url,obj2).then(console.log(obj)).catch(console.log("not"))


        // enviando requisição para o backend
        Axios({
            method: 'POST', //  http
            url: url, // url
            data: {
               nome: nome,
               email: email,
                telefone: telefone
                
             }
           }).then(
               console.log("funcional", typeof(nome))
          )

        // console.log(Data["nome"])


        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         Accept: "application/json",
        //         'Content-Type': "application/json"
        //     }, body: JSON.stringify({
        //         content: 'content'
        //     })

        // })

        
    }

    //função de exibição da lightbox => respota do envio da requisão
    // assim que o HandleSubmit tiver sucesso exibira o light box
    
    // e caso seja preferivel adicionando  o a div do overlay um evento onclick para retirar o lightbox

    const  lightbox = () =>{

        if(overlay.style.display == 'none'){

            overlay.style.display = 'flex'
            lightbox.style.display = 'flex'

        }else{

            overlay.style.display = 'none'
            lightbox.style.display = 'none'
        }
        

    }

    return(
        <>
            <div className= "principal_container">

                {/* seção sobre o concurso cultural */}
                <section className = "concurse_culture">

                    {/* imagem de referencia */}
                    <div className = "img_marketing">
                        <img className = "concurse_culture_img" src = {Festival} titile = "Concurso de cultura" alt = "imagem representativa do festival de cultura " cite = "Photo by Danny Howe on Unsplash"/>
                    </div>

                    {/* artigo sobre  o concuros cultural */}
                    <article id = "concurso_" className = "article_concurse_culture">
                        
                        <h2 className = "title_article">Concurso Cultura</h2>
                        <p className = "text_article">Travels Culture que tem  a missão de levar diferentes culturas a todo lugar, sempre se tratando das melhores experiências aos nossos convidados. E estamos promovendo um concurso cultural, uma nova experiências, com diferentes culturas, diferentes talentos e para todos. </p>
                        <p className = "text_article">Principalmente para você que tem algum um talento, Esta é sua oportunidade de se o quão grande você é,<strong> Então venha ja particpar do concurso cultural da Travels culture. </strong> </p>
                        
                        <a href = "#regist" title = "Link ancora para partipe"> 
                            <button className = "btn btn_participe">Participe</button>
                        </a>
                    </article>

                </section>

                {/* seção de registro e informações pertinentes  */}
                <section id= "regist" className = 'register'>

                    {/* informações pertinentes ao formulario e a e-mail */}
                    <article className = 'info_register'>
                    <h2 className = "title_article" >Participe agora mesmo</h2>
                    <p className = "text_article" >Preencha os dados a seguir e participe de uma promoção especial</p>
                    <p className = "text_article" >Assim que clicar no botão enviado, você recebará um e-mail da confirmação de sua participação. No email esterão presentes mais informações sobre evento, localidade, assim como o nosso contato para possiveis duvidas</p>
                    </article>

                    {/* formulario */}
                    <article className = "form">
                        <form   onSubmit = {HandleSubmit}>
                            <table> 
                                <tr>
                                    <td>
                                        <label  htmlFor = "nome" 
                                            className = "form_label" > Nome:</label>
                                    </td>

                                    <td>
                                        <input 
                                            id = "nome" 
                                            className = "form_input" 
                                            type = "text" 
                                            placeholder = "Digite seu nome"
                                            value = {nome} 
                                            onChange = {e => {setNome(e.target.value)}}
                                            required />
                                    </td>
                                </tr>
    
                                <tr>
                                    <td> 
                                        <label 
                                            className = "form_label"
                                            htmlFor = "email">E-mail:</label>
                                    </td>

                                    <td>
                                        <input 
                                            id = "email" 
                                            className = "form_input" 
                                            type = "email"
                                            value = {email} 
                                            onChange = {e => {setEmail(e.target.value)}}
                                            placeholder = "travels_cult@travel.com" 
                                            required /> 
                                    </td>
                                </tr>

                                <tr>
                                    <td> 
                                        <label 
                                            className = "form_label"
                                            htmlFor = "telefone">Telefone:</label>
                                    </td>
                                
                                    <td>
                                        <input 
                                            id = "telefone" 
                                            className = "form_input" 
                                            type = "text" 
                                            value = {telefone}
                                            onChange = {e => {setTelefone(e.target.value)}}
                                            placeholder = "(99) 99999-9999"/> 
                                    </td>
                                </tr>

                            </table>

                            <button className = "btn" type = "submit"> Enviar </button>

                        </form>

                    </article>

                </section>

            </div>

            {/* lightbox que aparece apos apretar o botão enviar  */}
            <div className = "overlay_lightbox">

                {/* lightbox */}
                <div className = "lightbox">

                    <div>
                                <div className= "content_logo">
                                    <div className = "circle_green"> </div>
                                    <div className = "circle_red"></div>
                                    <div className = "circle_orange"></div>
                                    <div className = "circle_white"></div>
                                </div>
                    </div>

                    <h2 className = "assert_form">Obrigado pela Inscrição</h2> 

                    <p className = "text_Assert_form"> Em instante você recebera um e-mail, com todas as informações sobre o concurso. Caso o e-mail não chegue, por favor verifique seu lixo eletronico ou spam</p>

                    <a href= "/" ><button className = "btn" > Voltar ao site</button></a>
                
                </div>

              

            </div>

        </>
    )
}