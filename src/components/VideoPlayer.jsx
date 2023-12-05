import React, {
    useEffect,
    useLayoutEffect,
    useRef,
  } from 'react';
  
  export const VideoPlayer = ({ user }) => {
    const ref = useRef();
  
    useEffect(() => {
      user.videoTrack.play(ref.current);
    }, []);
  
    return (
      <div>
        <div
          ref={ref}
          style={{ width: '700px', height: '580px', marginLeft: '0 auto', padding: '0px' }}
        ></div>
      </div>
    );
  };
  
