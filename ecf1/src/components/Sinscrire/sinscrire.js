import React  from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">  S'inscrire </h1>




            <div className="row message block">
                <div className="col-md-2 form-group">
                    <input type="text" placeholder="Email" {...register("Email", {required: true})} />
                </div>
            </div>

            <div className="row message block">
                <div className="col-md-2 form-group">
                    <input type="text" placeholder="Mot de passe" {...register("Mot de passe", {required: true, max: 12, min: 6})} />
                </div>
            </div>

            <div className="row message block">
                <div className="col-md-2 form-group">
                    <input type="text" placeholder="Confirmation mot de passe" {...register("Confirmation mot de passe", {required: true, max: 12, min: 6})} />
                </div>
            </div>

            <div className="row message block">
                <div className="col-md-2 form-group">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </div>

        </form>
    );
}