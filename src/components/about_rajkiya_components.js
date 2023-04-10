import '../App.css'
export default function AboutRajkiya({heading,content,button_text}){
    
    return (
        <div className="aboutus" id="aboutus">
          <h1 className="aboutustext">
            {heading}
          </h1>
          <br />
          <article className="aboutusart">
            {content}
            <button id="aboutusbutton">{button_text}</button>
          </article>
        </div>
    )
}