import {useState} from 'react';
import {storage} from './firebase/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';
import {db} from './firebase/firebase';
import {collection, addDoc} from 'firebase/firestore';
import {auth} from './firebase/firebase';
import '../css/PopUp.css';
import TagLine from './TagLine.js';


const PopUp = ({storeCollectionReference, dbCollectionReference}) => {
    const [tags, setTags] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [imageUpload, setImageUpload] = useState(null);
    // const user = auth.currentUser;

    const toggleOpen = () => {
        setOpen(!isOpen);
        console.log(isOpen);
    }


    const uploadImage = async () => {
        if (imageUpload === null) return;
        setLoading(true);
        // const imageRef = ref(storage, `references/${imageUpload.name + v4()}`);
        const imageRef = ref(storage, `${storeCollectionReference}/${imageUpload.name + v4()}`);
        // await uploadBytes(imageRef, imageUpload).then(() => {
        //     alert('Image uploaded successfully');
        // })
        await uploadBytes(imageRef, imageUpload);
        console.log(imageRef);

         // Get the file's download URL
         const downloadURL = await getDownloadURL(imageRef);
         console.log("File available at:", downloadURL);
 
         // Save the URL to Firestore
         await addDoc(collection(db, dbCollectionReference), {
             tags: tags,
             path: downloadURL,
             timestamp: new Date(),
            //  user: user.uid,
         });
 
         console.log("Image URL saved to Firestore!");
         setLoading(false);
         toggleOpen();
         setImageUpload(null);
         setTags([]);
    };

    const closePopup = async () => {
         setImageUpload(null);
         toggleOpen();
         setTags([]);
    };


    return (
        <div>
            
            <button onClick={toggleOpen}>
                <svg
                    aria-hidden="true"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-width="2"
                    stroke="#fffffff"
                    d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    ></path>
                    <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#fffffff"
                    d="M17 15V18M17 21V18M17 18H14M17 18H20"
                    ></path>
                </svg>
                ADD IMAGE
            </button>

            {isOpen && (
                 <div className="modal">
                    <div onClick={toggleOpen} className="overlay"></div>
                    <div className="modal-content">
                        <span class="title">Upload a File</span>
                        <p class="message">Select a file to upload from your computer or device.</p>
                        
                        <div class="actions">
                            <label htmlFor="file" class="upload-btn">Choose File
                                <input hidden type="file" id="file"  onChange={(e) => setImageUpload(e.target.files[0])}/>
                            </label>
                        </div>

                        <div class="result">
                            <div className="file-uploaded">
                                <p>{imageUpload ? imageUpload.name : "No file selected"}</p>
                            </div>
                        </div>

                        <TagLine tags = {tags} setTags={setTags}/>
                        
                        <button class = "upload-button" onClick={uploadImage}>
                        Upload
                        </button>
                        <button className="close-modal" onClick={closePopup}>
                            X
                        </button>
                        {loading && <div className="loader">Loading...</div>}
                   </div>
                 </div>
            )}
        </div>
    )
}

export default PopUp;