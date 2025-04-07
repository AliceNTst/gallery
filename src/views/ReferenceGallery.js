import React, { useState, useEffect } from 'react';
import { app } from '../components/firebase/firebase'
import UploadImages2 from '../components/UploadImages2';
import Auth_mine from '../components/Auth_mine';
import LoadImages2 from '../components/LoadImages2';
import PopUp from '../components/PopUp';
import TagLine from '../components/TagLine';
import './Gallery.css';


const ReferenceGallery = ({ tableName, isAdminPanel,  handleUpload , handleDelete}) => {
  const [tags, setTags] = useState([]);

  return (
    <div>
      
    {/* <TagInput_ref /> */}
    <div class='tag-line-container'>
      <div class='tag-line-width'>
        <TagLine tags = {tags} setTags={setTags}/>
      </div>
      <PopUp storeCollectionReference='references' dbCollectionReference='references'/>
    </div>
    {/* <div class="container-flex-r">
          <UploadImages2 />
      </div> */}
      {/* <Auth_mine /> */}
      <LoadImages2 tags = {tags} collectionReference='references'/>
      {/* <div><p>Hey hello!!</p></div> */}
  </div>
  );
};

export default ReferenceGallery;