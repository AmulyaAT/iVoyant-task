import { useState } from "react";

function useForm() {
  const [name, setName] = useState<string>("");
  const [place, setPlace] = useState<string>("");

  return { name, place, setName, setPlace };
}
export default useForm;
