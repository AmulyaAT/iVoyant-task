import React from "react";

interface WithLoadingProps{
    isLoading :boolean;
}

const withLoading =<P extends object>(WrappedComponent: React.ComponentType<P>) =>{
    return (props : P & WithLoadingProps) => {
        const { isLoading, ...rest } = props;
        if (isLoading){ return (<div>Loading...</div>);}
        return <WrappedComponent {...rest as P} />
}
}

export default withLoading;