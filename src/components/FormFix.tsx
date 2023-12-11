import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type FormValues = {
    email: string,
    password: string
}

const FormFix = () => {
    const form = useForm<FormValues>();
    const {register, control, handleSubmit, formState} = form;
    const {errors} = formState; 

    const onSubmit = (data: FormValues)=>{
        console.log('Form Values', data);
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
            <input type="password" id='password' {...register("password",{
                required: "Password Field Required"
            })} />
            <p className='error'>{errors.password?.message}</p>


            <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default FormFix