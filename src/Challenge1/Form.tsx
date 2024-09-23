import { useEffect, useState } from "react";
type Messagetype={
    name?:string;
    email?:string;
    password?:string;
}
export const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<Messagetype>({});
  useEffect(() => {
   
    const emailPattern =(email:string)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const message:Messagetype ={};
    if(name.trim()==="")
        message.name="name is required"
    if (!emailPattern(email)) message.email= "Please enter a valid email";
    if (password.length < 6) message.password= "Password must be atleast 6 characters";
    setError(message);
    
  }, [name, password, email]);
  const handlesubmit=()=>{
    console.log(`name is ${name} and email is ${email} password is ${password}`)
    if(Object.keys(error).length===0){
        alert("Form submitted successfully")
       
    }else{
        alert("fill all contents")
    }
}
  return (
      <form>
        <fieldset>
          <legend>User Details</legend>
          <div>
            <label>Name : </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter name"
            />
            {error.name && <h6>{error.name}</h6>}
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
            />
             {error.email && <h6>{error.email}</h6>}
          </div>
          <div>
            <label>Password : </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password"
            />
             {error.password && <h6>{error.password}</h6>}
          </div>
          <button onClick={handlesubmit}>Submit</button>
        </fieldset>
      </form>
  );
};