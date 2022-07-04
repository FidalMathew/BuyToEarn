import { useState } from "react"
import axios from 'axios'

const styles = {
    wrapper: "h-screen w-full flex items-center justify-center ",
    formDiv: "bg-[greenyellow] w-96 p-5 text-center",
    inp: "mt-2 ",
    h2: " text-2xl font-bold mb-5",
    button: "bg-[black] text-white mt-4 px-4 py-2 rounded"
}

function SignUp() {

    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [otp, setOtp] = useState("")
    const [genOtp, setGenOtp] = useState("")
    const [pass, setPass] = useState("")

    const [emailConf, setEmailConf] = useState("")

    const url = "http://localhost:5000"

    const triggerOtp = () => {

        const randVal = Math.floor((Math.random() * 10000));
        setGenOtp(randVal)
        // const res = axios.post(url, { randVal, email} );

    }

    const confirmEmail = () => {

        setEmailConf(true)
    }

    const signup = () => {

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.formDiv}>

                <h2 className={styles.h2}> Welcome to <br /> Signup Page</h2>
                {
                    !emailConf ?
                        (<form >
                            <div className={styles.inp} > <input type="email" className="focus:outline-none px-3 py-2" style={{ width: "19em" }} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} /></div>
                            <div className={styles.inp}>
                                <input type="number" className="focus:outline-none px-3 py-2" placeholder="OTP" required onChange={(e) => setOtp(e.target.value)} />
                                <button className={styles.button} onClick={triggerOtp}>Send OTP</button>
                            </div>
                            {genOtp && <div> Email sent to {email} </div>}
                            <div> <button className={styles.button} onClick={confirmEmail} >Confirm Email</button></div>
                        </form>)
                        :
                        (<form onSubmit={signup}>
                            <div className={styles.inp}> <input type="email" className="focus:outline-none px-3 py-2" placeholder="Email" readOnly required /></div>
                            <div className={styles.inp}> <input type="username" className="focus:outline-none px-3 py-2" placeholder="Username" required /></div>
                            <div> <button className={styles.button} >SignUp</button></div>
                        </form>)
                }
            </div>
        </div >
    )
}

export default SignUp