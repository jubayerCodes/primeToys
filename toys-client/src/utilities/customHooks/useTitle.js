import React, { useContext } from 'react';
import { useEffect } from 'react';
import { TitleContext } from '../../main';

const useTitle = (title) => {

    const siteTitle = useContext(TitleContext)
    
    useEffect(()=>{
        document.title = `${title} - ${siteTitle}`
    },[title])

};

const useHomeTitle = () =>{
    const siteTitle = useContext(TitleContext)
    useEffect(()=>{
        document.title = `${siteTitle}`
    },[])
}

export {useTitle, useHomeTitle};