import { useProgress } from '@react-three/drei';
import React from 'react';
import { useEffect } from 'react';

function LoadingScreen(props) {
    const {started,setStarted} = props

    const {progress, total,loaded,item} = useProgress

    useEffect(()=>{
        if(progress===100){
            setStarted(true)
        }
    },[progress,total,loaded,item])

    return (
        <div className={`fixed top-0 left-0 w-full h-Full z-50 transition-opacity duration-1000 pointers-events-none flex items-center justify-center bg-indigo-50 ${started?'opacity-0':'opacity-100'}`}>
        
            <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
            
                <div 
                    className ="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
                    style={{width: `${progress}%`}}
                >
                
                Wawa Sensei
                
                </div>
            
            <div className="opacity-40"> Wawa Sensei</div>
            </div>
        </div>
    );
}

export default LoadingScreen;