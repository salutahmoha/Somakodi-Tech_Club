// import React, { useState } from "react";
// import "./Forms.css";
// function Forms() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   function handleChange(event) {
//     event.preventDefault();

//     const formData = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };
//     props.sendFormDataToBackend(formData); //send data to backend

//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   }
//   return (
//     <section id="forms">
//       <div className="forms-container">
//         <form onSubmit={handleChange}>
//           <div className="form-element">
//             <label htmlFor="firstName"> First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               value={firstName}
//               setFirstName
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="lastName"> Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="email"> Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="password"> password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="confirmpassword"> Confirm password</label>
//             <input
//               type="password"
//               id="confirmpassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button className="form-btn">Register</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Forms;
