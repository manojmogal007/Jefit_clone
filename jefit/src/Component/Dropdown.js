import '../Css/Dropdown.css'
import {Box} from '@chakra-ui/react'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { Dropdown } from 'react-bootstrap';

// import './styles.css';

export default function Dropdown({value,title}){

    return(
        
        <Box w={150}>
            <button class="hover-button">{title}</button>
            <div class="dropdown" >
                {
                    value.map((el)=>(
                        <p key={el} className='item'>{el}</p>
                    ))
                }
            </div>
        </Box>
         
    )
}