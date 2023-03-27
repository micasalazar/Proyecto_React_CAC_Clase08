export default function Input (){
    return(
        <div>
            <h2>Completa tus datos</h2>
                <form>
                    <label for="nombre" >Nombre</label>
                    <input type="text" id="nombre" name="nombre"/>
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido"/>
                </form>
        </div>
    )
}