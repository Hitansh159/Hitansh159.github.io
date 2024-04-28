export default function Link({href, target="_blank", children}){
    return(
        <a href={href} target={target} style={{color:"black"}}>{children}</a>
    )
}