import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type FormValues = {
    email: string,
    password: string
    username: string,
    social:{
        twitter: "",
        facebook: ""
    }
    phoneNumbers: string[]
}


const FormFix = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            email: "abdimatin@infosend.com",
            social: {
                twitter: "",
                facebook: ""
            },
            phoneNumbers: ["", ""],
            username: ""
        }
      });

    const {register, control, handleSubmit, formState, getValues} = form;
    const {errors} = formState; 

    const onSubmit = (data: FormValues)=>{
        console.log('Form Values', data);
    }

    const getValueHandler = ()=>{
        console.log('Form Values', getValues());
    }


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register("email",{
                pattern:{
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"Invalid Email Format"
                },
                validate: (fieldValue)=>{
                    return (
                        !fieldValue.includes("gmail") || 
                        "Register With Business Email"
                    )
                }
            })}/>
            <p className='error'>{errors.email?.message}</p>

            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register("password",{required: "Password Field Required"})} />
            <p className='error'>{errors.password?.message}</p>

            <label htmlFor="twitter">Twitter</label>
            <input type="text" id='twitter' {...register("social.twitter",{required: "Twitter Profile Required"})} />
            <p className='error'>{errors.social?.twitter?.message}</p>

            <label htmlFor="facebook">Facebook</label>
            <input type="text" id='facebook' {...register("social.facebook", {required: "Fcaebook Profile Required"})} />
            <p className='error'>{errors.social?.facebook?.message}</p>

            {/* <label htmlFor="primary">Primary Phone Number</label>

            <input type="text" id='primary' {...register("phoneNumbers.0", {
                pattern:{
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Enter Phone Number Starting With Country Code"
                },
                validate: (fieldValue)=>{
                    return(
                        fieldValue.startsWith("+") || 
                        "Start With country Code"
                    )
                }
            })} />
            <p className='error'>{errors.phoneNumbers?.[1]?.message}</p> */}

            {/* <label htmlFor="seconadry">Secondary Phone Number</label>
            <input type="text" id='secondary' {...register("phoneNumbers.1",  {
                pattern:{
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Enter Phone Number Starting With Country Code"
                },
                validate: (fieldValue)=>{
                    return(
                        fieldValue.startsWith("+") || 
                        "Start With country Code"
                    )
                }
            })} />
            <p className='error'>{errors.phoneNumbers?.[0]?.message}</p> */}

            <label htmlFor="username">UserName</label>
            <input type="text" id='username' {...register("username", {
                validate: (value)=>{
                    return (
                        value.startsWith("@") || 'Username Should Start With One'
                    )
                }
            })} />
            <p className='error' >{errors.username?.message}</p>

            <button>Submit</button>
            <button type='button' onClick={getValueHandler} >Get Form Values</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default FormFix