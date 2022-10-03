import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AwayDetail } from './AwayDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';



export const AwayDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Camisetas', detalleId)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])

    return (


        <AwayDetail data={data} />


    );
}

export default AwayDetailContainer;