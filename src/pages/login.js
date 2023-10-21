import React from 'react'
import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Login.module.scss"
import cn from 'classnames'
import Link from "next/link"
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from "next/router"
import SVGEye from '@/public/icons/eye.svg'
import SVGEyeClose from '@/public/icons/eye-closed.svg'
import InputIcon from '@/components/common/input-icon'
import { axiosInstance } from 'src/utils/axios'
import { API_LOGIN } from 'src/utils/api'
import CustomAlert from '@/components/common/custom-alert'

export default function Login() {
    const router = useRouter()

    const [openAlert, setOpenAlert] = React.useState(false)
    const [seePassword, setSeePassword] = React.useState(false)
    const [error, setError] = React.useState('')
    const [severity, setSeverity] = React.useState('success')
    const [loginAccount, setLoginAccount] = React.useState({
        username: '',
        password: ''
    })

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username wajib diisi'),
        password: Yup.number()
    })

    console.log(validationSchema.isValid())
    
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions)

    const { errors } = formState

    console.log(errors)
    const handleVisibility = () => {
        setSeePassword(!seePassword)
    }

    const handleChange = (e) => {
        setLoginAccount({
            ...loginAccount,
            [e.target.name]: e.target.value
        })
    }

    const loginBtn = () => {
        const data = {
            username: loginAccount.username,
            password: loginAccount.password
        }

        axiosInstance.post(API_LOGIN, data)
        .then((res) => {
            console.log(res)
            if(res.status === 200) {
                router.push('/dashboard')
            }
        }).catch((err) => {
            setError(err.response.data.message)
            setSeverity('error')
            setOpenAlert(true)
        })
    }

    const handle = (data) => {
        console.log(data)
    }

    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-2">Selamat Datang!</h2>
            <h2 className="d-flex justify-content-center mb-5">Silahkan login untuk melanjutkan</h2>
            <div className={styles.form}>
                <div className={styles.inputField}>
                    <label htmlFor="username" className="form-label"><b>Username</b></label>
                    <input type="email" 
                        className="form-control" 
                        id="username" 
                        name='username' 
                        onChange={handleChange} 
                        placeholder="Masukkan username company" 
                        {...register('username')}
                    />
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
                        register={register}
                        icon={seePassword ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                    />
                    <div className="w-100 mt-1 mb-2">
                        <span className={styles.forgetText}>
                            <Link href='#'>Lupa password?</Link>
                        </span>
                    </div>
                </div>
                <button onClick={handleSubmit(handle)} className={cn(styles.loginBtn, "btn btn-primary blue")}>Login</button>
            </div>
            <span className="mt-5">Belum punya akun? <Link className={styles.registBtn} href='/register'>Daftar</Link></span>
        </div>
        <CustomAlert
            open={openAlert}
            onClose={() => setOpenAlert(false)}
            text={error}
            severity={severity}
            duration={2500}
        />
    </>)
}

Login.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}