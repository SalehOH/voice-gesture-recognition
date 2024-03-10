import { HandPose } from '@tensorflow-models/handpose'
import { GestureEstimator } from 'fingerpose'
import { ScrollUpGesture, ScrollDownGesture } from './customGestures';

const gestureEstimator = new GestureEstimator([
    ScrollUpGesture,
    ScrollDownGesture
]);

export const predictGesture = async (handposeModel: HandPose, video: HTMLVideoElement, minimumScore: number = 8) => {
    const predictions = await handposeModel.estimateHands(video);
    if (predictions.length > 0) {
        const gestureEstimations = gestureEstimator.estimate(
            // @ts-expect-error type isn't exported
            predictions[0].landmarks, minimumScore
        );
        if (gestureEstimations.gestures.length > 0) {

            const gestureResult = gestureEstimations.gestures.reduce((p, c) => {
                return (p.score > c.score) ? p : c;
            });
            return gestureResult.name;
        }
    }

    return ''
}