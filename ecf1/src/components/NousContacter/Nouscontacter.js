// import React from 'react'
//
// export default function Nouscontacter() {
//   return (
//       <div class="row-fluid">
//         <select class="form-select" aria-label="select">
//           <option selected>Sélection</option>
//           <option value="1">Je souhaite poser une réclamation</option>
//           <option value="2">Je souhaite commander un service supplémentaire</option>
//           <option value="3">Je souhaite en savoir plus sur une suite</option>
//           <option value="4">J’ai un souci avec cette application</option>
//         </select>
//
//         <div class="row">
//
//
//           <div class="col-12">
//             <input type="text" class="form-control" placeholder="Nom" aria-label="Last name"/>
//           </div>
//           <div class="col-12">
//             <input type="text" class="form-control" placeholder="Prénom" aria-label="First name"/>
//           </div>
//
//         </div>
//
//         <div class="col-12">
//           <label for="exampleFormControlInput1" class="form-label">Email address</label>
//           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
//         </div>
//
//
//         {/* Texte Area */}
//         <div class="col-12">
//           <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//           <textarea class="form-control" placeholder="Ecrivez votre message ici" id="exampleFormControlTextarea1" rows="3"/>
//         </div>
//
//
//         <div class="col-12">
//           <button type="submit" class="btn btn-primary">Envoyé</button>
//         </div>
//
//
//       </div>
//   )
// }
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
      <form className="container py-4 " onSubmit={handleSubmit(onSubmit)}>
        <h1>Nous contacter</h1>


        <div className="row Lastname block">
          <div className="col-md-2 form-group">
            <label className="label" htmlFor="Nom">Nom</label>
            <input type="text" placeholder="Nom" {...register("Nom", {required: true, maxLength: 80})} />
          </div>
        </div>




        <div className="row Firstname block">
          <div className="col-md-2 form-group">
            <label className="label" htmlFor="Prénom">Prénom</label>
            <input type="text" placeholder="Prénom" {...register("Prénom", {required: true, maxLength: 80})} />
          </div>
        </div>




        <div className="row email block">
          <div className="col-md-2 form-group">
            <label className="label" htmlFor="email">Email</label>
            <input type="email" placeholder="Email" {...register("Email", {required: true})} />
          </div>
        </div>


        <div className="row message block">
          <div className="col-md-2 form-group">
            <label className="label" htmlFor="Message">Message</label>
            <textarea {...register("Message", { maxLength: 400})} />
          </div>
        </div>

        <div className="row ButtonSubmit block">
          <div className="col-md-2 form-group">
            <input className="btn btn-primary" type="submit" />

          </div>
        </div>
<div>


</div>


      </form>
  );
}