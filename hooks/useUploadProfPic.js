import Compressor from 'compressorjs';
import React, { useEffect, useState } from 'react';

const useUploadProfPic = () => {
    const [img, setImg] = useState(null);
    const [upLoad, setupLoad] = useState(null)

    const ImgUpload = async (e) => {
        const tempFile = e.target.files, tempFileSize = tempFile[0].size / (1024 * 1024)
        if (tempFile && tempFile.length > 0 && tempFileSize <= 50) {
            new Compressor(tempFile[0], {
                quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
                convertSize: 1500000,
                convertTypes: ['image/png', 'image/webp', 'image/heic'],
                success: (compressedResult) => {
                    // compressedResult has the compressed file.
                    // Use the compressed file to upload the images to your server.        
                    setImg(compressedResult)

                },
            })

        }
    }

    useEffect(() => {
        if (img) {
            const formData = new FormData()
            formData.append('file', img)
            setupLoad(formData)
        }
        else {
            setupLoad(null)
        }

    }, [img])
    return { img, ImgUpload, setImg, upLoad }
};

export default useUploadProfPic;
