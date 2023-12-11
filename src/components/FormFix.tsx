import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type FormValues = {
    email: string,
    password: string
}

const FormFix = () => {
    const form = useForm<FormValues>();
    const {register, control, handleSubmit} = form;


    const onSubmit = (data: FormValues)=>{
        console.log('Form Values', data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register("email")}/>

            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register("password")} />

            <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default FormFix