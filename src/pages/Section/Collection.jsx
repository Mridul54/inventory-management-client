import  { useEffect, useState } from 'react';
import CollectionCard from './CollectionCard';

const Collection = () => {
    const [collection,  setCollection] = useState([]);
    useEffect(() => {
        fetch('collection.json')
        .then(res => res.json())
        .then(data => setCollection(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-10'>Our Product or Service Showcase</h1>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    collection.map((collect) => <CollectionCard key={collect.id} collect={collect}></CollectionCard>)
                }
            </div>
        </div>
    );
};

export default Collection;