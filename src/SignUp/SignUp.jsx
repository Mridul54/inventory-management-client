import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



const SignUp = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=> {
                console.log('user profile info updated')
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/");
            })
            .catch(error => console.log(error))
        })
    };
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        setRegistrationError('');
        setRegistrationSuccess(false);

        signInWithPopup(auth, provider)
           .then((result) => {
            console.log('Google sign up successful', result);
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
                <h1 className="text-5xl font-bold">Sign Up!</h1>
                
                </div>
                <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">This is field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",  { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">This is field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",  { 
                            required: true, 
                            minLength:6, 
                            maxLength:20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} name="password" placeholder="password" className="input input-bordered"/>
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">Password is required</p>)}
                        {errors.password?.type === "minlength" && (
                            <p className="text-red-600">Password must be 6 characters</p>)}
                        {errors.password?.type === "maxlength" && (
                            <p className="text-red-600">Password must be less then 20 characters</p>)}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600">Password must be have one uppercase, one lowercase,  one number, one special character</p>)}
                        
                        </div>
                        
                        <div className="form-control ">
                        
                        <input  className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    {registrationError && <p className="text-emerald-700 m-auto">{registrationError}</p>}
                    {registrationSuccess && <p className="text-emerald-700 m-auto">Registration Successful</p>}
                    <div className="w-full flex items-center justify-center relative  mt-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="text-xl absolute text-black/80 bg-[#f5f5f5]">or sign up with</p>
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
                </div>
                    <p className="text-center "><small>Already have an account? Please <Link to="/login">Login</Link></small></p>
                </div>
            </div>
        
        </>
    );
};

export default SignUp;