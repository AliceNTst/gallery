import {useState, useEffect} from 'react';
import {db} from './firebase/firebase';
import {collection, getDocs} from 'firebase/firestore';
import './LoadImages2.css';
// input tag
const LoadImages2 = ({tags, collectionReference}) => {
    const [imageList, setImageList] = useState([]);
    // const dbCollectionRef = collection(db, 'references');
    const dbCollectionRef = collection(db, collectionReference);
    
    useEffect(() => {
        const getImages = async () => {
            try{
                const data = await getDocs(dbCollectionRef);

                const allImages = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                
                // Filter images based on tags
                const filteredData = allImages.filter(image => 
                    image.tags && tags.every(tag => image.tags.includes(tag))
                );
                // console.log(filteredData);
                setImageList(filteredData);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        getImages();
    }, [tags, imageList]);


    // const [imageList, setImageList] = useState([]);
    // // const imageListRef = ref(storage, 'references/');
    // const dbCollectionRef = collection(db, 'references');
    
    // const [allImages, setAllImages] = useState([]);

    // useEffect(() => {
    //     const getImages = async () => {
    //         try {
    //             const data = await getDocs(dbCollectionRef);
    //             setAllImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //         } catch (error) {
    //             console.error("Error fetching images:", error);
    //         }
    //     };

    //     getImages();
    // }, []); // Fetch only once

    // useEffect(() => {
    //     setImageList(
    //         allImages.filter(image => 
    //             image.tags && tags.every(tag => image.tags.includes(tag))
    //         )
    //     );
    // }, [tags, allImages]);

    return (
    // <div style={{ height: "300px", overflowY: "scroll", border: "1px solid black" }}>
        <div class="container">
            
                {imageList.map((image) => (
                    <div class="box">
                        <img src={image.path} key={image.path} />
                    </div>
                ))}
            </div>
    )
}

export default LoadImages2;