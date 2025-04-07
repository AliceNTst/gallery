import {useState} from 'react';
import {storage} from './firebase/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';
import {db} from './firebase/firebase';
import {collection, addDoc} from 'firebase/firestore';
import {auth} from './firebase/firebase';

const UploadImage2 = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const user = auth.currentUser;

    const uploadImage = async () => {
        if (imageUpload === null) return;
        const imageRef = ref(storage, `references/${imageUpload.name + v4()}`);
        await uploadBytes(imageRef, imageUpload).then(() => {
            alert('Image uploaded successfully');
        })
        console.log(imageRef);

         // Get the file's download URL
         const downloadURL = await getDownloadURL(imageRef);
         console.log("File available at:", downloadURL);
 
         // Save the URL to Firestore
         await addDoc(collection(db, "references"), {
             tags: ['sky','road'],
             path: downloadURL,
             timestamp: new Date(),
             user: user.uid,
         });
 
         console.log("Image URL saved to Firestore!");
    };
    

    return (
        <div>
            <input type="file" onChange={(e) => setImageUpload(e.target.files[0])}/>
            <button onClick={uploadImage}>Upload Image</button>
            <h1>Upload Image 2</h1>
        </div>
    )
}

export default UploadImage2;