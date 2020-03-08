const chanllenge = () => {
    return(
        <div className="main">
            <img src="../static/platzi-logo.png" alt="logo-platzi"/>
            <h1>Creado por yo</h1>
            <p>Curso de Nexjs de platzi</p>


            <style jsx>{`
                .main{
                    width: 320px;
                    margin: 0 auto;

                }
            `}</style>
            <style jsx global>{`
                body{
                    background: #273b47;
                    color: #fff;
                }
            `}</style>
        </div>
    )
}

export default chanllenge;