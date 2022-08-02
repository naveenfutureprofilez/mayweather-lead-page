export default function Title(props) {
   return <>
      <div className={`title content ${props.classes}`}>
         <h2 className={`heading ${props.titleclass}`} >{props.title}</h2>
         {props.childrenVideo}
         {props.desclass && <p className={`${props.desclass}`}>{props.des}</p>}
      </div>
   </>
}