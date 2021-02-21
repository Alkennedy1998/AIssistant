import React, { useState, useEffect } from 'react';
import Avatar from 'avataaars'

const CustomAvatar = () => {
    const [counter, setCounter] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => setCounter(counter+1), 10);
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <div>
            <h1>{counter}</h1>
            <Avatar
            style={{width: '100px', height: '100px'}}
            avatarStyle='Circle'
            topType='LongHairMiaWallace'
            accessoriesType='Prescription02'
            hairColor='BrownDark'
            facialHairType='Blank'
            clotheType='Hoodie'
            clotheColor='PastelBlue'
            eyeType='Happy'
            eyebrowType='Default'
            mouthType='Smile'
            skinColor='Light'
            />
        </div>
        );
}


export default CustomAvatar