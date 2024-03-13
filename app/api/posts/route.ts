// index.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'
import { PostType } from '@/types';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('appdb');

        const posts: PostType[] = await db
            .collection('posts')
            .find({})
            .sort({ date: -1 })
            .toArray()
            .then((posts) => {
                if (!posts) {
                    throw Error()
                }
                return posts.map((post) => {
                    return {
                        id: post._id.toString(),
                        content: post.content,
                        date: post.date,
                    };
                });
            });
        return NextResponse.json(posts, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json("posts not found", { status: 404 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        if (!data.content) {
            throw new Error("Content is required");
        }
        const client = await clientPromise;
        const db = client.db('appdb');
        const post = {
            content: data.content,
            date: new Date(),
        }
        await db.collection('posts').insertOne(post);

        return NextResponse.json({ status: 201 });
    } catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return NextResponse.json("Content is required", { status: 400 });
        } else {
            return NextResponse.json("Internal Server Error", { status: 500 });
        }
    }
}
