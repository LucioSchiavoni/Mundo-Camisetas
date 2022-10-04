import React from 'react'

export const FormCart = () => {
    return (
        <>
            <form id='formBuyer'>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name='name' id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">No compartiremos tus datos con nadie.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Numero</label>
                    <input type="number" className="form-control" name='number' id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name='adress' id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Aceptar condiciones</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}


export default FormCart;