import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import useAxiosPublic from '../Hook/UseAxiosPublic';

const Login = () => {
    
    const [disabled, setDisabled] = useState(true);

    const {signIn, createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [registrationError, setRegistrationError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const auth = getAuth();
    const axiosPublic = useAxiosPublic()

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User login successful.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace: true});
            })
            setRegistrationError('');
            setRegistrationSuccess(false);

            createUser(email, password)
           .then(() => {
               console.log('Registration successful');
               setRegistrationSuccess(true);
               navigate('/login')
           })
           .catch(error => {
               console.error(error);
               setRegistrationError(error.message);
           })
    }
    
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        

        signInWithPopup(auth,provider)
           .then((result) => {
            console.log( result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
            })
            navigate('/');
            Swal.fire('Successfully Register!')
           })
           .catch((error) => {
            console.log('Google siggn up error', error);
           });
    }
    
    
    
    return (
        <>
        <Helmet>
                <title>Inventory | Sign Up</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                        <LoadCanvasTemplate />
                        </label>
                        <input type="text" onBlur={handleValidateCaptcha}  name="captcha" placeholder="Type the text above" className="input input-bordered" required />
                        
                        
                        </div>
                        <div className="form-control mt-6">
                        
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    {registrationError && <p className="text-emerald-700 m-auto">{registrationError}</p>}
                    {registrationSuccess && <p className="text-emerald-700 m-auto">Registration Successful</p>}
                    <div className="w-full flex items-center justify-center relative  mt-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="text-xl absolute text-black/80 bg-[#f5f5f5]">or sign in with</p>
                    </div>
                    <div className="flex items-center mt-6 -mx-2 mb-6">
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                    >
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>
                        <span className="hidden  sm:inline">Google</span>
                    </button>
                </div>
                    <p className='text-center pb-6'><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;