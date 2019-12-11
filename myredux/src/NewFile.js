import React from 'react';

const NewFile = (props) => {
        console.log(props);
        const { records } = props;
        const recordList = records.map(record => {
            return (
                <div className="newclass" key={record.id}>
                    <div>Name: { record.name }</div>
                    <div>Age: { record.age }</div>
                    <div>Belt: { record.belt }</div>
                </div>
            )
        })
        return(
            <div>
                { recordList }
            </div>    
        )
}

export default NewFile