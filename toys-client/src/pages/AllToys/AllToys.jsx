import React, { useContext, useEffect } from 'react';
import Toys from './Toys/Toys';
import { TitleContext } from '../../main';
import {useTitle} from '../../utilities/customHooks/useTitle';

const AllToys = () => {

    useTitle('All Toys')

    return (
        <>
            <Toys></Toys>
        </>
    );
};

export default AllToys;