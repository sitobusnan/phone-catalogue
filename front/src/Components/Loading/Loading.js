import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {newList} from '../../store/actions'

 const Loading = ({dispatch}) => {
        axios.get('http://localhost:5000')
        .then(data=>{
            dispatch(newList(data.data))
        })
    
        return (
            <div>
                TPM
            </div>
        )
    
}



export default connect()(Loading)
