import React from 'react'
import LayoutAuth from '@/components/layouts/auth'
import styles from '@/styles/pages/Register.module.scss'
import { useRouter } from "next/router"
import cn from 'classnames'
import Link from "next/link"
import InputIcon from '@/components/common/input-icon'
import SVGEye from '@/public/icons/eye.svg'
import SVGEyeClose from '@/public/icons/eye-closed.svg'
import { axiosInstance } from 'src/utils/axios'
import { API_REGIS } from 'src/utils/api'

export default function Register() {
    const router = useRouter()

    const [seePassword, setSeePassword] = React.useState(false)
    const [seeConfirmPass, setSeeConfirmPass] = React.useState(false)
    const [userAccount, setUserAccount] = React.useState({
        username: '',
        name: '',
        email: '',
        address: '',
        password: '',
        confirm_pass: ''
    })

    console.log(userAccount)

    const handleVisibility = () => {
        setSeePassword(!seePassword)
    }

    const handleSeeConfirmPass = () => {
        setSeeConfirmPass(!seeConfirmPass)
    }

    const handleChange = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()

        const data = {
            name: userAccount.name,
            username: userAccount.username,
            email: userAccount.email,
            password: userAccount.password,
            confPassword: userAccount.confirm_pass,
            address: userAccount.address
        }

        axiosInstance.post(API_REGIS, data)
        .then((res) => {
            console.log(res)
            if(res.data.statusCode === 200) {
                
            }
        }).catch((err) => console.log(err))
    }

    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-4">Daftar Akun Perusahaan</h2>
            <form onSubmit={submitForm}>
                <div className={styles.form}>
                    <div className={styles.inputField}>
                        <label htmlFor="name" className="form-label"><b>Name</b></label>
                        <input type="text" onChange={handleChange} className="form-control" id="name" name="name" placeholder="Masukkan nama perusahaan" />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="email" className="form-label"><b>Email</b></label>
                        <input type="email" onChange={handleChange} className="form-control" id="email" name="email" placeholder="Masukkan email perusahaan" />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="username" className="form-label"><b>Username</b></label>
                        <input type="text" onChange={handleChange} className="form-control" id="username" name="username" placeholder="Masukkan username perusahaan" />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="address" className="form-label"><b>Alamat Perusahaan</b></label>
                        <input type="text" onChange={handleChange} className="form-control" id="address" name="address" placeholder="Masukkan username perusahaan" />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <InputIcon 
                            placeholder="Masukkan password"
                            id="password"
                            name="password"
                            type={seePassword ? "text" : "password"}
                            onClick={handleVisibility}
                            onChange={handleChange}
                            icon={seePassword ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                        />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="confirmPass" className="form-label"><b>Konfirmasi Password</b></label>
                        <InputIcon 
                            placeholder="Masukkan konfirmasi password"
                            id="confirm_pass"
                            name="confirm_pass"
                            type={seeConfirmPass ? "text" : "password"}
                            onClick={handleSeeConfirmPass}
                            onChange={handleChange}
                            icon={seeConfirmPass ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                        />
                    </div>
                    <button type='submit' className={cn(styles.regisBtn, "btn btn-primary blue")}>Daftar</button>
                </div>
            </form>
            <span className="my-5">Sudah punya akun? <Link className={styles.loginBtn} href='/login'>Login</Link></span>
        </div>
    </>)
}

Register.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}