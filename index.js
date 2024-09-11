const start = () => {
    let count = 1
    while(true){
        let opção = "sair"
        switch(opção){
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()