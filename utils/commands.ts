import { submitPost } from './helpers'
export const homeCommand = (router: any, setHelp: any) => [
    {
        command: ['help', 'Help'],
        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            setHelp(true)
        },
    },
    {
        command: ['Close', 'close'],
        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            setHelp(false)
        },
    },
    {
        command: ['Posts', 'Read post', 'Read posts', 'Read'],
        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            router.push('/posts')
        },
    },
    {
        command: ['Create Post', 'Create Post.', 'Create a Post', 'Create'],
        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            router.push('/posts/create')
        },
    },
]

export const postsCommand = (router: any) => [
    {
        command: ['Back', 'Go back'],

        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            router.back()
        },
    },
    {
        command: ['Home', 'Go Home'],
        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            router.push('/')
        },
    },
    {
        command: ['Create Post', 'Create a Post', 'Create'],
        callback: ({ resetTranscript }: any) => {
            resetTranscript()
            router.push('/posts/create')
        },
    },
]

export const createPostCommand = (router: any, transcript: string) => {
    return [
        {
            command: ['Back', 'back'],
            callback: ({ resetTranscript }: any) => {
                resetTranscript()
                router.push('/')
            },
        },
        {
            command: ['submit', 'Submit'],
            callback: ({ resetTranscript }: any) => {
                resetTranscript()
                const content = transcript.split(' ').slice(0, -1).join(' ');
                if (content) {
                    submitPost(content).then(() => {
                        router.push('/posts')
                    })
                }
            },
        },
    ]
}