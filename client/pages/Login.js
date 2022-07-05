import { useState } from "react"

const styles = {
    wrapper: "h-screen w-full flex items-center justify-center ",
    formDiv: "bg-[greenyellow] w-96 p-5 text-center",
    inp: "mt-2 ",
    h2: " text-2xl font-bold mb-5",
    button: "bg-[black] text-white mt-4 px-4 py-2 rounded"
}

function Login() {

    const login = () => {

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.formDiv}>

                <h2 className={styles.h2}> Welcome to <br /> Login Page</h2>

                <form onSubmit={login}>
                    <div className={styles.inp}> <input type="email" className="focus:outline-none px-3 py-2" placeholder="Email" required /></div>
                    <div className={styles.inp}> <input type="password" className="focus:outline-none px-3 py-2" placeholder="Password" required /></div>
                    <div> <button className={styles.button} >Login</button></div>
                </form>

            </div>
        </div >
    )
}

export default Login