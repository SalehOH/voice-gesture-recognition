import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

const ScrollUpGesture = new GestureDescription('scrollUp');
for (const finger of Finger.all) {
    ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1);
}



const ScrollDownGesture = new GestureDescription('scrollDown');
// thumb
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
ScrollDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.7);
ScrollDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

// index
ScrollDownGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ScrollDownGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

// middle
ScrollDownGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ScrollDownGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
ScrollDownGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);

// ring
ScrollDownGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ScrollDownGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

// pinky
ScrollDownGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ScrollDownGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
ScrollDownGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);


export {
    ScrollUpGesture,
    ScrollDownGesture
}
