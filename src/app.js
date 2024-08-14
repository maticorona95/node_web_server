const {envs} = require('./config/env')
const {startSertver } =require ('./server/server')

const main = () => {
    startSertver({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


(async() => {
    main()
}) ()