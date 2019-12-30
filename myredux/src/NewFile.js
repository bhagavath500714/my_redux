// import React from 'react';

// const NewFile = (props) => {
//         console.log(props);
//         const { records } = props;
        // record condition age > 20
        // const recordList = records.map(record => {            
        //     if(record.age > 20) {
        //         return (
        //             <div className="newclass" key={record.id}>
        //                 <div>Name: { record.name }</div>
        //                 <div>Age: { record.age }</div>
        //                 <div>Belt: { record.belt }</div>
        //             </div>
        //         )
        //     } else {
        //         return null
        //     }
            
        // })

        // condition based on ternery operator
        // const recordList = records.map(record => {
        //     return record.age > 20 ? (
        //     <div className="newclass" key={record.id}>
        //    <div>Name: { record.name }</div>
        //    <div>Age: { record.age }</div>
        //    <div>Belt: { record.belt }</div>
        //    </div>
        //    ) : null;
        // });

        // return(
            // <div>
            //     { recordList }
            // </div>  
            
            // condition can done inside JSX side 
            // <div>
            //     {
            //          records.map(record =>{
            //             return record.age >20 ? (
            //                 <div className="newclass" key={record.id}>
            //                     <div>Name: { record.name }</div>
            //                     <div>Age: { record.age }</div>
            //                     <div>Belt: { record.belt }</div>
            //                 </div>
            //             ) : null;
            //         })
            //     }               
            // </div>
//         )
// }

// export default NewFile

import React from 'react'

const Records = ({records, deleteRecord}) => {
    const recordList = records.map(file => {
        if(file.age > 20){
            return (
                <div className="newclass" key={file.id}>
                    <div>Name: { file.name }</div>
                    <div>Age: { file.age }</div>
                    <div>Belt: { file.belt }</div>
                    {/*  annonimus function  */}
                    <button onClick={() => {deleteRecord(file.id)}}>Delete</button>
                </div>
            )             
        } else {
            return null
        }
    })

    return(
        <div>
            { recordList }
        </div>
    )
}

export default Records