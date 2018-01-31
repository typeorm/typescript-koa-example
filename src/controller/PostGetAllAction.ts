import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(context: Context) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load all posts
    const posts = await postRepository.find();

    // return loaded posts
    context.body = posts;
}