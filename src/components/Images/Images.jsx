import React, {useContext, useEffect, useState, Fragment} from 'react';
import {userContext} from "../App";
import Loading from "../Loading";

const Images = () => {
    const [Images, setImages] = useState([])
    const cntxt = useContext(userContext)

    useEffect(() => {
        fetchingData()
    }, []);

    useEffect(() => {
        fetchingData()
    }, [cntxt.user]);

    const fetchingData = () => {
        
        fetch(`https://jsonplaceholder.typicode.com/photos?AlbumId=${cntxt.user.id}`)
            .then(data => data.json())
            .then(json => setImages(json))
    }

    const renderImages = () => {
        if ( !Images.length ) {
            return (<Loading />)
        }
        return (
            Images.map(item => (<img className="img" class="rounded"  src={item.thumbnailUrl} alt={"#"} key={item.id}></img>))
        )
    }

    return (
        <Fragment>
            {renderImages()}
        </Fragment>

    )

}

export default Images