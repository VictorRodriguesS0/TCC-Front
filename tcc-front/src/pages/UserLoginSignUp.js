import {useState, useEffect} from "react"

export default function Login (){
    
    const initialValues = {email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    };
    
    useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
    };
  
    return (
        <div className="flex flex-col justify-center items-center p-2 max-w-96 h-screen">
            <h1 className='text-xl font-bold mb-2 primaryFont secondaryColor'>Login / SignUp</h1>
            <p className="py-2 px-4 bg-orange-500 rounded-lg mb-2 secondaryFont">Google</p>
            <p className="text-xl text-center font-bold my-4 secondaryFont">OR</p>
            <form className="flex flex-col justify-center items-center mb-2 secondaryFont" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={formValues.email}
                    onChange={handleChange}
                    className="py-2 px-4 primaryBColor rounded-lg mb-2"
                />
                <p className="text-sm text-red-500 font-light">{formErrors.email}</p>
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                    className="py-2 px-4 primaryBColor rounded-lg mb-2"
                />
                <p className="text-sm text-red-500 font-light">{formErrors.password}</p>
                <input 
                    type="submit" 
                    placeholder="submit"
                    className="p-3 primaryBColor rounded-lg hover:bg-orange-500"
                />
            </form>
        </div>
        )
}