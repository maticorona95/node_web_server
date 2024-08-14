const express = require ('express')
const path = require ('path')

const startSertver = (options) => {
    const { port , public_path = 'public'} = options
    const app = express ()

    // Para poder unsar middlewares se usa la plabra use (express)

    app.use(express.static(public_path)) // contenido estatic que ponemos disponible

    app.get('*', (req,res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port} `)
    })


}

module.exports = {
    startSertver
}