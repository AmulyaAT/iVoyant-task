import React, { useEffect } from "react";

const useLocation = ()=>{
    const [location, setLocation] = React.useState<{lat:number|null;log: number|null}>({lat:null,log:null});
    const [error , seterror] =React.useState<string|null>(null);
    const [loading,setloading] =React.useState<boolean>(true);

    useEffect(()=>{
       const getLocation =()=>{
        setloading(true);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setLocation({
                        lat: position.coords.latitude,
                        log: position.coords.longitude,
                    })
                    setloading(false)
                },
                (error)=>{
                    seterror(error.message)
                    setloading(false)

                }
            )

        }else {
            seterror ("not supported")
            setloading(false)
        }
       };
       getLocation();
    },[]);
return {location,error,loading}
}
export default useLocation;